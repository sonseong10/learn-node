const path = require("path")

console.log(__dirname)
console.log(__filename)

console.log(path.sep)
console.log(path.delimiter)

// basename
console.log(path.basename(__filename))
console.log(path.basename(__filename, ".js"))

// dirname
console.log(path.dirname(__filename))

// extension
console.log(path.extname)

// parse
const parsed = path.parse(__filename)
console.log(parsed)
console.log(parsed.root)

// format
const str = path.format(parsed)
console.log(str)

// isAbsolute
console.log(path.isAbsolute(__dirname))
console.log(path.isAbsolute("../"))

// normalize
console.log(path.normalize("./test/////temp"))

// join
// 💩
// console.log(__dirname + "/" + "foo")
// console.log(__dirname + path.sep + "foo")

// ✨
console.log(path.join(__dirname, "foo"))
