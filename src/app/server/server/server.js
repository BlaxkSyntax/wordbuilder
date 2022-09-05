const Config = require("../config/config");
const ServerRoutes = require("../routes/apiEndpooint");

class Server {

    constructor(server, port) {
        this.server = new Config(server).serverCOnfig();
        new ServerRoutes(server);
        this.port = port;
        this.start();
    }

    start() {
        this.server.listen(process.env.PORT || this.port, () => {
            console.log(`server listening at : ${this.port}`)
        })
    }
}

module.exports = Server;