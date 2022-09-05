const bodyParser = require('body-parser');

let listOfPlayers = [];
let listOfChar = [];
let listOfMatchings = [];

class Memory {

    addPlayer(player){
        listOfPlayers.push(player);
    }

    getPlayerName(player){
        return listOfPlayers.includes(player);
    }

    getAllPlayers(){
        return listOfPlayers;
    }

    addChar(char){
        listOfChar.push(char);
    }

    getChar(char){
        return listOfChar.includes(char);
    }

    getAllChar(){
        return listOfChar;
    }

    addMatching(matching){
        listOfMatchings.push(matching);
    }

    get(matching){
        return listOfMatchings.find(player);
    }

}

module.exports = Memory;