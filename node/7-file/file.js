const fs = require("fs").promises

// read
fs.readFile("./foo.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error)

// append
fs.writeFile("./foo.txt", "Test Message").catch(console.error)

// writing
fs.appendFile("./foo.txt", "Test Message!!!").catch(console.error)

// copy
fs.copyFile("./foo.txt", "./boo.txt").catch(console.error)

// folder
fs.mkdir("sub").catch(console.error)

// readdir
fs.readdir("./").then(console.log).catch(console.error)
