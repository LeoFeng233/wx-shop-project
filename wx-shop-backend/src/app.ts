import koa from 'koa';
import bodyParser from "koa-bodyparser";
import authRouter from "./routes/AuthRoute";

const app = new koa();

app.use(bodyParser());

app.use(authRouter.routes())
    .use(authRouter.allowedMethods());

export default app;
