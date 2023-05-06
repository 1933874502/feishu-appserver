import userRouter from "./user"
import koa from "koa"

export default function (ctx: koa<koa.DefaultState, koa.DefaultContext>) {
  ctx.use(userRouter)
}
