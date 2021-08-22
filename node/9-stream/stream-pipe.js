const fs = require("fs")
const zlib = require("zlib")

const readStream = fs.createReadStream("./lorem.txt")
const zlibStream = zlib.createGzip()
const writeStream = fs.createWriteStream("./lorem2.zip")
const piping = readStream.pipe(zlibStream).pipe(writeStream)
piping.on("finish", () => {
  console.log("Done")
})
