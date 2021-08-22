const fs = require("fs")

const data = []

const readStream = fs
  .createReadStream("./lorem.txt", {
    // highWaterMark: 8, // default 64KB
    encoding: "utf8",
  })
  .on("data", (chunk) => {
    data.push(chunk)
    console.count("data")
  })
  .on("end", () => console.log(data.join("")))
  .on("error", console.error)
