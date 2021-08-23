const fs = require("fs")
const os = require("os")
const path = require("path")

const originDir = process.argv[2]
const workDir = path.join(os.homedir(), "ex-poto", originDir)
if (!originDir || fs.existsSync(workDir)) {
  console.error(`Can not find Directory: ${originDir}`)
}

const files = fs.readdirSync(originDir)
files.map((file) => {
  const parsed = path.parse(file)
  switchToExt(parsed)
})

function switchToExt(parsed) {
  const { ext, base } = parsed
  switch (ext) {
    case "":
      return
    case ".mp4":
    case ".mov":
      return moveDir(base, path.join(originDir, "/video/"))
    case ".png":
    case ".aae":
      return moveDir(base, path.join(originDir, "/captured/"))
    case ".jpg":
      return checkDup(base, path.join(originDir, "/duplicated/"))
    default:
      console.error(`Invalid file found: ${base}`)
      break
  }
}

function checkDup(base, newDir) {
  const reg = "IMG_E"
  if (base.includes(reg)) {
    return
  }
  moveDir(base, newDir)
}

function moveDir(base, newDir) {
  !fs.existsSync(newDir) && fs.mkdirSync(newDir)
  fs.promises
    .rename(`./${originDir}/${base}`, `${newDir + base}`)
    .then(() => console.log(`move ${base} to ${newDir}`))
    .catch(console.error)
}
