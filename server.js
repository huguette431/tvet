const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tvet'
});

db.connect(err => {
    if (err) {
        console.log('Database connection failed');
        return;
    }
    console.log('Database connected');
});

app.post('/students', (req, res) => {
    const { name, email } = req.body;
    const sql = "INSERT INTO students (name, email) VALUES (?, ?)";
    db.query(sql, [name, email], (err) => {
        if (err) throw err;
        res.json({ message: "Student registered successfully" });
    });
});

app.get('/students', (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/enrollments', (req, res) => {
    const { student_id, course_id } = req.body;
    const sql = `
        INSERT INTO enrollments (student_id, course_id, enrollment_date)
        VALUES (?, ?, CURDATE())
    `;
    db.query(sql, [student_id, course_id], (err) => {
        if (err) throw err;
        res.json({ message: "Student enrolled successfully" });
    });
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});