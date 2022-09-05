const bodyParser = require('body-parser');
const Player = require('../../api/controllers/addplayer');
const Char = require('../../api/controllers/char');
let player = new Player();
let char = new Char();

class ServerRoutes {

    constructor(server) {
        this.spin(server);
        this.getspin(server);
    }

    getspin(server){
        server.get('/char', function (req, res) {
            const spinchar = req.body.char;
            res.json(char.getChar());
        })
    }

    words(server){
        server.post('/words', function (req, res) {
            const playword = req.body;
            res.json(words.addWords(playword));
        })
    }

    getWords(server){
        server.get('/words', function (req, res) {
            const playword = req.params.char;
            res.json(words.getWords(playword));
        })
    }

    /*addPlayer(server){
        server.post('/player', function (req, res) {
            const player = req.body;
            console.log(player);
            res.json("ok");
        })
        //new infoController();
    }

    addPlayer(server){
        server.post('/player', function (req, res) {
            const player = req.body;
            console.log(player);
            res.json("ok");
        })
        //new infoController();
    }

    addPlayer(server){
        server.post('/player', function (req, res) {
            const player = req.body;
            console.log(player);
            res.json("ok");
        })
        //new infoController();
    }

    getPlayer(server){
        server.get('/player/:id', function (req, res) {
            const playerID = req.params.id;
            res.json(playerID);
        })
        //new infoController();
    }

    getPlayer(server){
        server.get('/player/:id', function (req, res) {
            const playerID = req.params.id;
            res.json(playerID);
        })
        //new infoController();
    }

    getPlayer(server){
        server.get('/player/:id', function (req, res) {
            const playerID = req.params.id;
            res.json(playerID);
        })
        //new infoController();
    }

    getPlayer(server){
        server.get('/player/:id', function (req, res) {
            const playerID = req.params.id;
            res.json(playerID);
        })
        //new infoController();
    }

    updatePlayer(server){

    }*/
}

module.exports = ServerRoutes;