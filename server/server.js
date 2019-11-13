// * PKGS & SETTINGS
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const serverRouter = require('./serverRouter.js');
const session = require("express-session");
const sessionConfig = require('./auth/sessionConfig');
const settings = [
    express.json(),
    helmet(),
    morgan('combined'),
    cors(),
    session(sessionConfig)
];
server.use(settings);

// * ROUTES
server.use('/api', serverRouter);

module.exports = server;