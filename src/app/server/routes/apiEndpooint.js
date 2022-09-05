const bodyParser = require('body-parser');
const Player = require('../../api/controllers/addplayer');
const Char = require('../../api/controllers/char');
const Words = require('../../api/controllers/words');
let player = new Player();
let char = new Char();
let words = new Words();

class ServerRoutes {

    constructor(server) {
        this.getspin(server);
        this.words(server);
        this.getWords(server);
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
            console.log(playword);
            res.json(words.addWords(playword));
        })
    }

    getWords(server){
        server.get('/words', function (req, res) {
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