import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';


import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
		<Toaster 
			position='top-right'
			toastOptions={{
				style: {
					fontSize: '16px', // Adjust font size globally
				},
			}}
		/>
	</Provider>
);
