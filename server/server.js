// * PKGS & SETTINGS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const serverRouter = require('./serverRouter.js');
const settings = [express.json(), helmet(), morgan('combined')];
const server = express();
server.use(settings);

// * ROUTES
server.use('/api', serverRouter);

module.exports = server;