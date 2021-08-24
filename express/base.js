import express from "express"
const app = express()

app.all("/api", (req, res, next) => {
  console.log("all")
  next()
})

app.use("/ipa", (req, res, next) => {
  console.log("use")
  next()
})

app.get("/posts/:id", (req, res, next) => {
  // Base
  // console.log(req.path)
  // console.log(req.headers)
  // res.send("Hello Express")

  console.log(req.params)
  console.log(req.params.id)
  console.log(req.query)
  console.log(req.query.name)
  // res.sendStatus(400)
  res.setHeader("key", "value")
  res.status(200).send("Ok")
})
app.listen(8080)
