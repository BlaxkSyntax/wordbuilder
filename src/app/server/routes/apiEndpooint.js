const Code = require('../../api/controllers/code');
let codeToBreak = new Code();

class ServerRoutes {

    constructor(server) {
        this.code(server);
    }

    code(server){
        server.post('/code', function (req, res) {
            res.json(codeToBreak.break(Array.from(String(req.body.code), Number)));
        })
    }
}

module.exports = ServerRoutes;