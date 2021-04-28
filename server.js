const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Innovaciones Médicas Tecnológicas - INMETEC');
});

console.log('INMETEC System running', process.env.PORT || 5000);
