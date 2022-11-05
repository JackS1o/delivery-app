const port = process.env.PORT || 3001;
const app = require('./app');
const registerRouter = require('../routes/register');
const loginRouter = require('../routes/login');
const customerRouter = require('../routes/customer');
const imageRouter = require('../routes/images');
const salesRouter = require('../routes/sales');
const sellerRouter = require('../routes/seller');
const getSalesRouter = require('../routes/sales');

app
  .use(registerRouter)
  .use(loginRouter)
  .use(customerRouter)
  .use(imageRouter)
  .use(salesRouter)
  .use(sellerRouter)
  .use(getSalesRouter);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
