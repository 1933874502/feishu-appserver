import koa from "koa"
import routes from "./routes"
import bodyParser from "koa-bodyparser"
import { Server } from "socket.io"
import { createServer } from "http"

const app = new koa()

const httpServer = createServer(app.callback())
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
})
io.on("connection", (socket) => {
  console.log("someone connected")
  socket.on("message", (args) => {
    console.log("客户端发新版本过来了", args)
    socket.emit("message", args)
  })
})
httpServer.listen(8999, () => {
  console.log("websocket listen on 8999")
})

app.use(bodyParser())
routes(app)
app.listen(8080, () => {
  console.log("listen", 8080)
})
