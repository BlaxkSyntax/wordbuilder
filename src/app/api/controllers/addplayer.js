const bodyParser = require('body-parser');
const Memory = require('../data/memory');
let memory = new Memory();

class Player {

    constructor(server) {
        this.server = server;
    }

    addPlayer(player){
        if(memory.getPlayerName(player)){
            return "player exits try new name"
        }else{
            memory.addPlayer(player)
            return "add";
        }
    }

    getPlayer(player){
        console.log(player);
        console.log(memory.getAllPlayers());
        if(memory.getPlayerName(player)){
            return memory.getPlayerName(player);
        }else{
            return "no such player";
        }
    }
}

module.exports = Player;