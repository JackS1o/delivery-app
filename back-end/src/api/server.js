const port = process.env.PORT || 3001;
const app = require('./app');
const registerRouter = require('../routes/register');
const loginRouter = require('../routes/login');
const customerRouter = require('../routes/customer');
const imageRouter = require('../routes/images');

app
  .use(registerRouter)
  .use(loginRouter)
  .use(customerRouter)
  .use(imageRouter);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
