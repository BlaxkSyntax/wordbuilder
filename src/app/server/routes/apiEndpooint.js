const Code = require('../../api/controllers/code');
let codeToBreak = new Code();

class ServerRoutes {

    constructor(server) {
        this.code(server);
    }

    code(server){
        server.post('/code', function (req, res) {
            console.log(req.body.code);
            res.json(codeToBreak.break(Array.from(Stringreq.body.code, Number)));
        })
    }
}

module.exports = ServerRoutes;