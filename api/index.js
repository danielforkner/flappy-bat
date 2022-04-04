const apiRouter = require('express').Router();
const { getScores } = require('../db');

apiRouter.use('/', (req, res, next) => {
  console.log('a request to api was made');
  next();
});

apiRouter.get('/scores', async (req, res, next) => {
  console.log('api/index:ln5 an attempt to GET scores is being made');
  try {
    const scores = await getScores();
    res.send('hello');
  } catch (error) {
    throw error;
  }
});

module.exports = apiRouter;
