const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.use(express.json());

app.post('/api/data', (req, res) => {
  const { name } = req.body;
  const query = `INSERT INTO users (name) VALUES ('${name}');`;
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error inserting data' });
    } else {
      res.send({ name });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});