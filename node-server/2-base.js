const http = require("http")

const server = http.createServer((req, res) => {
  const url = req.url
  res.setHeader("Content-Type", "text/html")
  if (url === "/") {
    res.write("<html>")
    res.write("<head><title>HTML TEST</title></head>")
    res.write("<body><h1>Welcome</h1></body>")
    res.write("</html>")
  } else if (url === "/courses") {
    res.write("<html>")
    res.write("<head><title>HTML TEST</title></head>")
    res.write("<body><h1>courses</h1></body>")
    res.write("</html>")
  } else {
    res.write("<html>")
    res.write("<head><title>HTML TEST</title></head>")
    res.write("<body><h1>Unknow Path...</h1></body>")
    res.write("</html>")
  }

  res.end()
})

server.listen(8080)
