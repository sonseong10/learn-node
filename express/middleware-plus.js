import express from "express"

const app = express()

app.use(express.json())

app.use(express.json()) // REST API -> Body
app.use(express.urlencoded({ extended: false })) // HTML Form -> Body
app.use(express.static("dirName"))

app.listen(8080)
