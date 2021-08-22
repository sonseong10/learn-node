const fs = require("fs")

// base
fs.rename("./foo.txt", "./new-foo.txt")

// rename(..., callback(error, data)) 비동기
fs.rename("./foo.txt", "./new-foo.txt", (error) => {
  console.log(error)
})

// 💩
// try{renameSync(...)} catch(error){}
try {
  fs.renameSync("./foo.txt", "./new-foo.txt")
} catch (error) {
  console.log(error)
}

// promises.rename().then.catch(error)
fs.promises
  .rename("./foo.txt", "./new-foo.txt")
  .then(() => console.log("success"))
  .catch(console.error)
