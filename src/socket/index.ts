import { Socket } from "socket.io"
import messageResolver from "./messageResolvers"

export default function socketConnectionResolver(socket: Socket) {
  socket.on("message", messageResolver)
}
