A full-stack Zerodha-inspired stock trading platform built using React, Node.js, Express, and MongoDB. The project includes a landing website, user authentication system, and a trading dashboard with orders and holdings functionality.

🚀 Features
🔹 Landing Website
Responsive home page

About page

Products page

Pricing page

Support page

Sign up / Login navigation

🔹 Authentication
User registration

User login

Password hashing using bcryptjs

JWT-based authentication

🔹 Trading Dashboard
Dashboard overview

Orders section

Holdings section

Positions section

Funds section

Buy order window

Profile dropdown with logout

🔹 Testing
Component testing using Jest and React Testing Library

🛠️ Tech Stack
Frontend
React

React Router DOM

Bootstrap

Axios

Backend
Node.js

Express.js

MongoDB

Mongoose

bcryptjs

jsonwebtoken

dotenv

cors

Testing
Jest

React Testing Library

📁 Project Structure
ZERODHA/
├── frontend/      # Landing website
├── dashboard/     # Trading dashboard
├── backend/       # API and database server
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/zerodha-clone.git
cd zerodha-clone
▶️ Run Backend
cd backend
npm install
npm start
Backend runs on http://localhost:3002

▶️ Run Frontend
cd frontend
npm install
npm start
Frontend runs on http://localhost:3000

▶️ Run Dashboard
cd dashboard
npm install
npm start
Dashboard runs on http://localhost:3001

🔐 Environment Variables
Create a .env file inside the backend folder:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
🧪 Run Tests
From the frontend folder:

npm test
📸 Screenshots
Landing Page
Add screenshot here

Login / Signup
Add screenshot here

Dashboard
Add screenshot here

Orders & Holdings
Add screenshot here

🌟 Future Improvements
JWT authentication with HttpOnly cookies

Real-time stock price updates

Portfolio analytics charts

Buy/Sell order history

User profile management

Responsive mobile dashboard

📌 Learning Outcomes
Through this project I learned:

Full-stack application development

REST API integration

Authentication & authorization

MongoDB schema design

React component testing

State management and routing

Git and GitHub workflow

👨‍💻 Author
Masoom Raza

GitHub:https://github.com/Masoom-07

LinkedIn: https://www.linkedin.com/in/masoom-raza-9727752aa/

⭐ Support
If you found this project helpful, please star the repository on GitHub.
