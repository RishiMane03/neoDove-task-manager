# task-manager

### to run app
#### go to each individial folder and run yarn or npm install
#### go back to root folder and run npm start

A simple task manager built using the MERN stack (MongoDB, Express, React, Node.js). This project allows users to create, update, and manage their tasks.

Features
User authentication (Login/Signup)
Create, update, delete tasks
Task categories (pending, completed, etc.)
User-friendly dashboard

Technologies Used
Frontend: React
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT (JSON Web Token)

Installation and Setup
Prerequisites
Make sure you have the following installed:
Node.js (v14 or above)
MongoDB (running locally or using MongoDB Atlas)
Git
Steps to Set Up Locally

Clone the repository
bash
Copy code
git clone https://github.com/RishiMane03/neoDove-task-manager.git
cd neoDove-task-manager
Install dependencies

Navigate to the root folder and install server-side dependencies:

bash
Copy code
cd server
npm install
Then navigate to the frontend folder and install client-side dependencies:

bash
Copy code
cd ../client
npm install
Set up environment variables

Create a .env file in the backend folder with the following variables:

makefile
Copy code
PORT=5000

Ensure MongoDB is running locally or you're connected to MongoDB Atlas.

Run the application

First, start the backend server:

bash
Copy code
cd server
npm start

Then start the frontend:

bash
Copy code
cd ../client
npm start
