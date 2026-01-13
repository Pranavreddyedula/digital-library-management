📚 Digital Library Management System

A web-based Digital Library Management System developed using Node.js, Express, MongoDB, and HTML/CSS/JavaScript.
This project automates library operations such as book management, issuing, and returning, providing an easy-to-use interface for both Admin and Users.

🚀 Live Application (Local)

After running the project locally, access the application using the following links:

🏠 Home Page
👉 http://localhost:5000

👨‍💼 Admin Module
👉 http://localhost:5000/admin.html

👤 User Module
👉 http://localhost:5000/user.html

🎯 Project Objective

The main objective of this project is to digitize and automate library management, including:

Book management

Issuing and returning books

Reducing manual work

Improving efficiency and accuracy

Providing a user-friendly interface

🧩 Modules Overview
👨‍💼 Admin Module

The Admin has complete control over the system.

Features:

Add new books

View and manage books

Update or delete existing records (can be extended)

Maintain library database

👤 User Module

Users have limited privileges.

Features:

Browse available books

Search books by category or title

Issue books

Return books

View book availability

Contact admin via email (future enhancement)

🛠️ Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB (Local)

ODM: Mongoose

Tools: MongoDB Compass, GitHub

📁 Project Folder Structure
digital-library-management/
│
├── backend/
│   ├── server.js
│   └── db.js
│
├── frontend/
│   ├── index.html
│   ├── admin.html
│   ├── user.html
│   ├── login.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
│
├── models/
│   ├── Book.js
│   ├── User.js
│   └── Issue.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── userRoutes.js
│   └── authRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── README.md

⚙️ How to Run the Project Locally
✅ Prerequisites

Node.js installed

MongoDB installed and running

MongoDB Compass (recommended)

▶️ Steps to Run

Clone the repository

git clone https://github.com/Pranavreddyedula/digital-library-management.git


Navigate to project folder

cd digital-library-management


Install dependencies

npm install


Create .env file

MONGO_URI=mongodb://localhost:27017/digital_library
PORT=5000


Start MongoDB

Open MongoDB Compass

Connect to: mongodb://localhost:27017

Start the server

npm start


Open in browser

http://localhost:5000

🗄️ Database Details

Database Name: digital_library

Collections:

books – Stores book information

issues – Stores issued/returned book records

📸 Screenshots (For Report)

Home Page

Admin Dashboard (Add Book & View Books)

User Dashboard

MongoDB Compass (books & issues collections)
🔮 Future Enhancements

User authentication and authorization

Update & delete book functionality

Fine calculation system

Email notifications

Online deployment (Render / Railway)
👤 Author

Edula Sai Pranav Reddy
CSE Student

🔗 GitHub:
https://github.com/Pranavreddyedula

📜 License

This project is developed for educational purposes and college submission.
