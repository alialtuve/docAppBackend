const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Innovaciones Médicas Tecnológicas');
});

const server = app.listen(process.env.PORT || 5000);
console.log(server);
console.log('INMETEC System running', process.env.PORT || 5000);
