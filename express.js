const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send("home");
});

app.get('/about', (req, res) => {
  res.send("about");
});

app.post('/contact', (req, res) => {
  res.send("contact");
});


app.listen(3000, () => {
  console.log("server started on port 3000");
});