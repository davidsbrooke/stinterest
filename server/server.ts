import * as express from 'express';
import * as mongoose from 'mongoose'

const app = express();


app.listen(3000, () => {
  console.log(`Server is listening at localhost: ${3000}`);
});
