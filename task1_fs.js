const fs = require("fs");

fs.writeFileSync("message.txt", "Hello Node.js! This is my first file created with fs module.");

const data = fs.readFileSync("message.txt", "utf8");
console.log(data);
