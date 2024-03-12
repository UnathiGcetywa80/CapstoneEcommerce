const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 3000;
app.use(bodyParser.json());
const pool = mysql.createPool({
  host: 'bp8g9cetke7cu1mgnwin-mysql.services.clever-cloud.com',
  user: 'uoqw1ha6zstlghxs',
  password: 'LzY5GNaE5PMp1qIKZxped',
  database: 'bp8g9cetke7cu1mgnwin',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
// Endpoint to get all reviews
app.get('/reviews', (req, res) => {
  pool.query('SELECT * FROM reviews', (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  });
});
// Endpoint to add a new review
app.post('/reviews', (req, res) => {
  const { username, rating, comment } = req.body;
  if (!username || !rating || !comment) {
    return res.status(400).json({ error: 'Incomplete data' });
  }
  pool.query('INSERT INTO reviews (username, rating, comment) VALUES (?, ?, ?)',
    [username, rating, comment],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      const newReview = {
        id: results.insertId,
        username,
        rating,
        comment,
        createdAt: new Date(),
      };
      res.status(201).json(newReview);
    });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});