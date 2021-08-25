import express from "express"

const app = express()

// TODO: Please use it first and then delete comments
// app.use((req, res, next) => {
//   //NOTE: use extension: live-server
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, DELETE"
//   )
//   next()
// })

app.get("/", (req, res) => {
  res.send("Welcome!")
})

app.listen(8080)
