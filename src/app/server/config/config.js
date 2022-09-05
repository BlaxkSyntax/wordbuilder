const bodyParser = require('body-parser');
const cors = require('cors');
//const helmet = require('helmet');
//const morgan = require('morgan');

class Config {

    constructor(server) {
        this.server = server;
    }

    serverCOnfig(){
        // adding Helmet to enhance your Rest API's security
        //this.server.use(helmet());
        
        // using bodyParser to parse JSON bodies into JS objects
        this.server.use(bodyParser.json());
        
        // enabling CORS for all requests
        this.server.use(cors());
        
        // adding morgan to log HTTP requests
        //this.server.use(morgan('combined'));
        return this.server
    }
}

module.exports = Config;