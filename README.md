1. Identify and list the functional requirements of the system.
  -Register students.
  -Add new courses.
 -Enroll students in courses.
-  View all students.
  -View all courses.
  -View enrollments (which student is enrolled in which course).

2. Identify at least 3 non-functional requirements (e.g., security, performance, scalability)
-Security: Protect student data (e.g., passwords if login is added, avoid SQL injection).
-Performance: Quick response when fetching students or courses.
-Scalability: Able to handle growing number of students and courses.


1. How the Backend System Works
The backend system is built using Node.js and Express.
Express is used to create a server that exposes API endpoints for managing students, courses, and enrollments.
•	The server listens for HTTP requests (GET and POST).
•	Each request is handled by an API endpoint defined in server.js.
•	The backend connects to a MySQL database to store and retrieve data.
•	Responses are sent back to the client in JSON format.
The system handles:
•	Student registration
•	Course creation
•	Student enrollment into courses
•	Viewing stored data





Keys Definition
Primary Keys
•	student_id → Students
•	course_id → Courses
•	enrollment_id → Enrollments
Foreign Keys
•	student_id in Enrollments → references Students(student_id)
•	course_id in Enrollments → references Courses(course_id)






2. Data Flow (Client → Server → Database)
1.	The client (Postman or browser) sends an HTTP request (for example, POST /students).
2.	The server (Express) receives the request and reads the JSON data.
3.	The server processes the request and sends an SQL query to the MySQL database.
4.	The database stores or retrieves the requested data.
5.	The server sends a JSON response back to the client showing success or the requested data.
Example:
A student is registered → client sends student details → server inserts data into the Students table → server returns confirmation.

3. Challenges Faced and Solutions
Challenge	Solution
No database selected error	Used USE database_name; before creating tables
Database already existed	Created a new database with a different name
Connecting backend to MySQL	Used the mysql2 library and tested the connection
Managing student–course relationship	Created an Enrollments table with foreign keys
