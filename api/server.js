const express = require('express');
const { logger, validateUserId, validateUser, validatePost } = require('./middleware/middleware');
const server = express();
const usersRouter = require('./users/users-router');

server.use(express.json());
server.use(logger);
server.use('/api/users', usersRouter);

// const postsRouter = require('./posts/posts-model');

// global middlewares and the user's router need to be connected here
// server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
