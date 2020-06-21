const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const router = require('koa-router')({ prefix: '/api' })

// 设置 cookie 加密秘钥
app.keys = ['some secret', 'another secret']

const goods = [
  {
    id: 1,
    text: '哎哟喂',
  },
  {
    id: 2,
    text: '阿西吧',
  },
]

router.get('/goods', (ctx) => {
  ctx.body = {
    ok: 1,
    data: goods,
  }
})

router.get('/detail', (ctx) => {
  ctx.body = {
    ok: 1,
    data: goods.find((good) => good.id == ctx.query.id),
  }
})

router.post('/login', (ctx) => {
  const user = ctx.request.body

  if (user.username === 'jerry' && user.password === '123') {
    const token = 'a mock token'
    ctx.cookies.set('token', token)
    ctx.body = {
      ok: 1,
      data: token,
    }
  } else {
    ctx.body = {
      ok: 0,
    }
  }
})

app.use(bodyparser())

app.use(router.routes())

app.listen(8080, () => console.log('api 服务已启动'))
