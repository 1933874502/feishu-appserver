import koa from "koa"
import routes from "./routes"
import bodyParser from "koa-bodyparser"
import { Server } from "socket.io"
import { createServer } from "http"
import socketConnectionResolver from "./socket"

const app = new koa()

const httpServer = createServer(app.callback())
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
})
io.on("connection", socketConnectionResolver)
httpServer.listen(8999, () => {
  console.log("websocket listen on 8999")
})

app.use(bodyParser())
routes(app)
app.listen(8080, () => {
  console.log("listen", 8080)
})
