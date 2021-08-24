import express from "express"
const app = express()

app.get(
  "/",
  (req, res, next) => {
    console.log("first 1")
    if (true) {
      return res.send("Hello!")
    }
    res.send("Hello")
  },
  (req, res, next) => {
    console.log("first 2")
  }
)

app.get("/", (req, res, next) => {
  console.log("second")
  // next(new Error("error"))
})

app.use((req, res, next) => {
  res.status(404).send("Not Found 🤪")
})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).send("Sorry")
})

app.listen(8080)
