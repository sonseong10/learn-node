// Fixed-size chuck of memory
// array of integer, byte of data
// unicode table: https://unicode-table.com/kr/

const fs = require("fs")

const buf = Buffer.from("Hi")
console.log(buf)
console.log(buf.length)
console.log(buf.toString())

// create
const buf2 = Buffer.alloc(2)
const buf3 = Buffer.allocUnsafe(2) //fast
buf2[0] = 72
buf2[1] = 105
console.log(buf2.toString())
console.log(buf3)
buf2.copy(buf3)
console.log(buf3.toString())

// concat
const newBuf = Buffer.concat([buf, buf2, buf3])
console.log(newBuf.toString())
