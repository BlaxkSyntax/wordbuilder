const Memory = require("../data/memory");

let memory = new Memory();

class Code {

    break(code){
        if(memory.getCode().length != null && memory.getCode() == 4){
            if(memory.getCode() == code){
                return "success"
            }else{
                return "fail"
            }
        }else {
            memory.generateCode()
            console.log(memory.getCode());
            if(memory.getCode().join(",") == code){
                return "success"
            }else{
                return "fail"
            }
        }
    }

}

module.exports = Code;