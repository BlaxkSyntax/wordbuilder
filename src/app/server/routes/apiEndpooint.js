const bodyParser = require('body-parser');
const Player = require('../../api/controllers/addplayer');
const Char = require('../../api/controllers/char');
let player = new Player();
let char = new Char();

class ServerRoutes {

    constructor(server) {
        this.addPlayer(server);
        this.getPlayer(server);
        this.spin(server);
        this.getspin(server);
    }

    addPlayer(server){
        server.post('/player', function (req, res) {
            const name = req.body.name;
            res.json(player.addPlayer(name));
        })
    }

    getPlayer(server){
        server.get('/player/:name', function (req, res) {
            const name = req.params.name;
            res.json(player.getPlayer(name));
        })
    }

    spin(server){
        server.post('/spin', function (req, res) {
            const spinchar = req.body.spinchar;
            res.json(char.addChar(spinchar));
        })
    }

    getspin(server){
        server.get('/char', function (req, res) {
            const spinchar = req.body.char;
            res.json(char.getChar());
        })
    }

    words(server){
        server.post('/words', function (req, res) {
            const playword = req.body.spinchar;
            res.json(words.addWords(playword));
        })
    }

    getWords(server){
        server.get('/words/', function (req, res) {
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