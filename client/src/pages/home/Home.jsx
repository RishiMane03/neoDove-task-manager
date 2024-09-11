import './home.scss';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Home = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	return (
		<div className='homePageDiv'>
			<div className='home'>
				<div className='home__container'>
					<h2>Sync your tasks, master your time</h2>
					<p>With TaskManager</p>

					{currentUser && currentUser.token ? (
						<Link to='/dashboard' className='button'>
							Get Started
						</Link>
					) : (
						<Link to='/signin' className='button'>
							Get Started
						</Link>
					)}

				</div>
			</div>
				<h3 className='slogan'>Revolutionize Your Productivity—Organize, Prioritize, Conquer</h3>
		</div>
	);
};

export default Home;
