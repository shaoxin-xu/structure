const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();
app.use(koaBody());

router.post('/getUserInfo', async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = JSON.stringify({ content: 'Hello World' });
    await next();
});
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async ctx => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "Content-Type,Access-Token");
});


app.listen(3000);
console.log('listen to 3000');