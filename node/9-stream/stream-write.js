const fs = require("fs")

const data = []

const writeStream = fs.createWriteStream("./lorem2.txt")
writeStream.on("finish", () => {
  console.log("finished")
})

writeStream.write("hello!")
writeStream.write("hello!")
writeStream.write("world!")
writeStream.end()
