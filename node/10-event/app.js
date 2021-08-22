const EventEmitter = require("events")
const emitter = new EventEmitter()

const callback = (args) => {
  console.log(`event!`, args)
}
emitter.on("foo", callback)

emitter.emit("foo", { message: 1 })
emitter.removeListener("foo", callback)
