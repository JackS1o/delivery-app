const port = process.env.PORT || 3001;
const app = require('./app');
const registerRouter = require('../routes/register');

app
  .use(registerRouter);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
