import * as express from 'express';
import * as mongoose from 'mongoose'
import config = require('./config/config')

const app = express();

//Routes config
app.use(require('body-parser')());
app.use('client', express.static('client'));
app.use('/scripts', express.static('bower_components'));

app.get('/', (req, res, next) => {
  res.sendFile(config.client + '/shared/index.html');
})
app.listen(3000, () => {
  console.log(`Server is listening at localhost: ${3000}`);
});
