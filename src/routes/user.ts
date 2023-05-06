import koaRouter from "@koa/router"

const userRouter = new koaRouter()

userRouter.post("/login", (ctx) => {
  console.log("请求来啦", ctx.request)
})

export default userRouter.routes()
