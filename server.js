const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const routes = require('./config/routes');

const app = express();

app.use(cors());

app.get('/logo', (req, res) => {
  const img = fs.readFileSync('./img/logo.png');
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(img);
});

app.use(routes);

app.use('/public', express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 5000);

// eslint-disable-next-line no-console
console.log('INMETEC System running', process.env.PORT || 5000);
