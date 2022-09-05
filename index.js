const express = require('express')
const Server = require('./src/app/server/server/server.js')
const app = express()
const port = 3001


new Server(app,port);