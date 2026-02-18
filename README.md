Student Course Registration System
Project Documentation

1. Project Description
This project is a simple backend system made using Node.js, Express, and MySQL.
The main goal of this project is to manage students, courses, and enrollments.
With this system:
A student can be added
A course can be added
A student can be enrolled in a course
All data can be viewed from the database
This project helps me understand how backend servers work and how they connect to a database.

3. Tools and Technologies Used
Node.js
Express.js
MySQL
MySQL2 package
JSON format for sending data

5. Project Files Explanation
3.1 package.json
This file manages the project settings and dependencies.
It includes:
Project name and version
The start script to run the server
Dependencies like express and mysql2
This file helps npm know what packages the project needs.
3.2 package-lock.json
This file is automatically created by npm.
It keeps the exact versions of all installed packages.
It helps make sure the project runs the same way on different computers.
3.3 dbconnect.js
This file is used to connect the project to the MySQL database.
Inside this file:
Express is imported
MySQL connection is created
Database name is studentcoursers
If the connection works, a message is shown
This file makes sure the database is ready to use.
3.4 server.js
This is the main file of the project.
It does the following:
Creates the server using Express
Connects to the MySQL database
Handles all API routes
Starts the server on port 3000

7. API Endpoints Explanation
4.1 Students
POST /students
Used to add a new student
Takes name and email from the request body
Saves the student in the database
GET /students
Used to get all students
Returns a list of students in JSON format
4.2 Courses
POST /courses
Used to add a new course
Takes course name from the request body
GET /courses
Used to get all courses
Returns all courses from the database
4.3 Enrollments
POST /enrollments
Used to enroll a student in a course
Takes student ID and course ID
Saves the enrollment date automatically
GET /enrollments
Shows all enrollments
Displays student name, course name, and enrollment date
8. How to Run the Project
Install Node.js
Create the MySQL database named studentcoursers
Create tables: students, courses, and enrollments
Open the project folder in terminal
Run this command:
npm install
Start the server using:
npm start
The server will run on port 3000

10. Conclusion
This project helped me understand:
How to create a backend server
How to connect Node.js with MySQL
How APIs work using GET and POST methods
It is a simple project but very useful for learning backend development.


Done by Huguette Manzi Keza
From L4SWDA

