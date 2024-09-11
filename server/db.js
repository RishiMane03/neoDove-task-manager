const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://rishimane03:rishi123@cluster0.8fzl8.mongodb.net/';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
