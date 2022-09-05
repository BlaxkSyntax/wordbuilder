const express = require('express')
const Server = require('./src/app/server/server/server.js')
const app = express()
const port = 3000


new Server(app,port);