import { express, json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

require('dotenv').config();

app.use(json());

app.use(cors());

app.use(urlencoded({ extended: true }));

if (process.env.ENVIRONMENT === 'DEV') {
  app.use(morgan('dev'));
}

app.listen(8080, () => {
});
