const bodyParser = require('body-parser');
const Memory = require('../data/memory');
let memory = new Memory();

class Char {

    addChar(char){
        if(memory.getChar(char)){
            return "char already used"
        }else{
            memory.addChar(char)
            return "add";
        }
    }

    getChar(char){
        console.log(char);
        console.log(memory.getAllChar());
        if(memory.getChar(char)){
            return memory.getChar(char);
        }else{
            return "no such char";
        }
    }
}

module.exports = Char;