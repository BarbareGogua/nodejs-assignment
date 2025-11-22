const os = require("os");

console.log("Computer Name:", os.hostname());
console.log("Username:", os.userInfo().username);
console.log("OS Type:", os.type());
console.log("Home Directory:", os.homedir());
