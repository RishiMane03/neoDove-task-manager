import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/taskSlice';
import ListCard from './ListCard';
import './tasklist.scss';

const TaskList = () => {
	const auth = useSelector((state) => state.auth);
	const tasks = useSelector((state) => state.task);

	const { currentUser } = auth;
	const { AllTasks } = tasks;

	const dispatch = useDispatch();
	const [filter, setFilter] = useState('all'); // State to handle the dropdown filter

	useEffect(() => {
		dispatch(getAllTasks(currentUser.token, currentUser.id));
	}, [dispatch, currentUser.token, currentUser.id]);

	// Function to handle status change
	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	// Filter tasks based on the selected status
	const filteredTasks = Object.values(AllTasks).filter((task) =>
		filter === 'all' ? true : task.status === filter
	);

	return (
		<div>
			{/* Dropdown for status filter */}
			<div className="filter-container">
				<select
					id="status-filter"
					value={filter}
					onChange={handleFilterChange}
				>
					<option value="all">All</option>
					<option value="todo">To Do</option>
					<option value="doing">Doing</option>
					<option value="done">Done</option>
				</select>
			</div>

			<ul className="list-header">
				<li>
					<h5>Id</h5>
				</li>
				<li>
					<h5>Issue Name</h5>
				</li>
				<li>
					<h5>Status</h5>
				</li>
				<li>
					<h5>Action</h5>
				</li>
			</ul>

			<div className='scrollable-list'>
				{filteredTasks.map((item) => (
					<ListCard key={item._id} item={item} />
				))}
			</div>
		</div>
	);
};

export default TaskList;
