const os = require("os")

console.log(os.EOL === "\r\n") // window
console.log(os.EOL === "\n") // mac

console.log(os.userInfo())
console.log(os.cpus())
console.log(os.hostname())
