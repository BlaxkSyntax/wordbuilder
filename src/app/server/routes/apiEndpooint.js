const Code = require('../../api/controllers/code');
let codeToBreak = new Code();

class ServerRoutes {

    constructor(server) {
        this.code(server);
    }

    code(server){
        server.post('/code', function (req, res) {
            const code = req.body.code;
            console.log(code);
            res.json(codeToBreak.break(code));
        })
    }
}

module.exports = ServerRoutes;