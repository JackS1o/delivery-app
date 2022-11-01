const port = process.env.PORT || 3001;
const app = require('./app');
const registerRouter = require('../routes/register');
const loginRouter = require('../routes/login');

app
  .use(registerRouter)
  .use(loginRouter);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
