# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Before running the project, make sure you have the following installed:

Node.js (v14 or later)
npm (comes with Node.js)
## JSON Server (install globally using npm install -g json-server if not already installed)


## Follow the steps below to set up and run the project:

1. Clone the Repository
 ## git clone <repository-url>

2. Install Dependencies
 ## `npm install`

3. Start the React Application
 ### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. Install JSON server globally 
 ## `npm install -g json-server`

5.  Start the JSON Server (use another terminal for this )
 ## `json-server --watch db.json --port 5000`




Role-Based Access Control (RBAC) Management UI


 Overview

This project is a user-friendly Role-Based Access Control (RBAC) management interface designed to manage users, roles, and permissions effectively. Administrators can:

•	Add, edit, and delete users.
•	Assign roles and statuses to users.
•	Create and modify roles with associated permissions.
This frontend project is built using React, TailwindCSS, and a mock backend served via json-server.

Features
Features
1. Login Page
•	Users and admins can log in with their credentials.
•	Login functionality validates users based on their email and password.
•	Admins are redirected to the Admin Dashboard, while regular users can access the Registration Page.

2. Registration Page
•	New users can create an account.
•	The registration form includes fields for name, email, password, status (active/inactive), and a default role (User).
•	After successful registration, users are redirected to the Login Page.

3. Admin Dashboard
•	Only Admins can access the dashboard.
•	Admins can:
•	View only user details (other admins are not displayed).
•	Delete user accounts.
•	View fields such as name, email, and status for each user.
•	Admins cannot see their own details or other admin accounts.

Admin Credentials
Use the following admin credentials to log in and access the Admin Dashboard:

Email: admin@example.com
Password: admin123

4. Mock API Integration
•	All operations are performed with a mock backend powered by json-server.
•	Includes mock API endpoints for users and roles (/users and /roles).



Technologies Used
•	React: Component-based architecture for dynamic UI rendering.
•	TailwindCSS: Utility-first CSS framework for fast and responsive design.
•	json-server: Mock backend to simulate API calls.
•	Axios: For making API requests to the mock server.
•	React Router: For navigating between the User Management and Role Management pages.

Getting Started
1. Clone the Repository
git clone https://github.com/your-username/rbac-management-ui.git
cd ui
2. Install Dependencies
npm install
3. Add Mock Data
Create a file named db.json in the root directory with the following content:
{
  "users": [
    { "id": 1, "name": "Hritik nagar", "email": "hritik@example.com", "role": "Admin", "status": "Active" },
    { "id": 2, "name": "Rnnk ", "email": "rnnk@example.com", "role": "Editor", "status": "Inactive" }
  ],
  "roles": [
    { "id": 1, "name": "Admin", "permissions": ["Read", "Write", "Delete"] },
    { "id": 2, "name": "Editor", "permissions": ["Read", "Write"] }
  ]
}
4. Start the Mock Server
json-server --watch db.json --port 5000
The mock server will be available at http://localhost:5000.
5. Start the Development Server
npm start
The application will be available at http://localhost:3000.
API Endpoints
Users API
•	GET /users - Retrieve all users.
•	POST /users - Add a new user.
•	PUT /users/:id - Update a user's details.
•	DELETE /users/:id - Delete a user.
Roles API
•	GET /roles - Retrieve all roles.
•	POST /roles - Add a new role.
•	PUT /roles/:id - Update a role's details.
•	DELETE /roles/:id - Delete a role.

Future Enhancements
•	Search and Filter: Add search bars and filtering options for users and roles.
•	Pagination: Handle large datasets with paginated views.
•	Role Hierarchies: Implement parent-child relationships for roles.
•	Audit Logs: Track changes and actions performed by administrators.






