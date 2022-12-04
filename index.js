const userInfo = require('./information');
const cowSay = require("cowSay");

console.log(cowSay.say({
    text : `hello i'm ${userInfo.myName} from ${userInfo.campus} campus!`,
    e : "oO",
    T : "U",
}))