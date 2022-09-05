const bodyParser = require('body-parser');

let code = [];

class Memory {

    generateCode(){
        for (let index = 0; code.length < 4; index++) {
            code.push(Math.floor(Math.random() * 9) + 1);
            console.log(code);
        }
    }

    getCode(){
        return code;
    }

}

module.exports = Memory;