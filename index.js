const { PORT = 3000 } = process.env;
const express = require('express');
const app = express();
const apiRouter = require('./api');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('<----Body Logger START---->');
  console.log(req.body);
  console.log('<----Body Logger END---->');
});

app.use('/api', apiRouter);

const { client } = require('./db');
client.connect();

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is live on port ', PORT);
});
