import express from "express"
import fs from "fs"
import fsAsync from "fs/promises"
import "express-async-errors"

const app = express()

app.use(express.json())

app.get("/file", (req, res) => {
  fs.readFile("/file.txt", (error, data) => {
    if (error) {
      res.sendStatus(404)
    }
  })
})

app.get("/file1", (req, res) => {
  try {
    const data = fs.readFileSync("./file1.txt")
    res.send(data)
  } catch (error) {
    res.status(404).send("Not Found 🤪")
  }
})

app.get("/file2", (req, res) => {
  fsAsync
    .readFile("./file2.txt")
    .then((data) => res.send(data))
    .catch((error) => res.sendStatus(404))
})

app.get("/file3", async (req, res) => {
  try {
    const data = await fsAsync.readFile("./file3.txt")
    res.send(data)
  } catch (error) {
    res.status(404).send("Not Found 🤪")
  }
})

// NOTE: Use express-async-errors lib
app.get("/file4", async (req, res) => {
  return fsAsync.readFile("./file4.txt").then((data) => res.send(data))
})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ message: "Sorry, finding Error..." })
})

app.listen(8080)
