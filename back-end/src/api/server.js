const port = process.env.PORT || 3001;
const app = require('./app');
const registerRouter = require('../routes/register');
const loginRouter = require('../routes/login');
const customerRouter = require('../routes/customer');
const imageRouter = require('../routes/images');
const sellerRouter = require('../routes/seller');
const userRouter = require('../routes/user');
const salesProductsRouter = require('../routes/salesProducts');

app
  .use(registerRouter)
  .use(loginRouter)
  .use(customerRouter)
  .use(imageRouter)
  .use(sellerRouter)
  .use(userRouter)
  .use(salesProductsRouter);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
