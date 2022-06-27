const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.DB_PASS,
  database: "library",
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  db.query(
    "INSERT INTO books (title, author) VALUES (?, ?)",
    [title, author],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.post("/add", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  db.query(
    "INSERT INTO read_books (title, author) VALUES (?, ?)",
    [title, author],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/library", (req, res) => {
  db.query("SELECT * FROM books ORDER BY author", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/readbooks", (req, res) => {
  db.query("SELECT * FROM read_books ORDER BY author", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//delete
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM books WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/readremove/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM read_books WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.put("/update", (req, res) => {});

app.listen(3001, () => {
  console.log("Your server is running on port 3001.");
});
