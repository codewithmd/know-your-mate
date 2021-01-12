import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const app = express();

const mdbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  `mongodb+srv://${process.env.userName}:${process.env.password}@know-your-mate.u8g5i.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`,
  mdbOptions,
  () => {
    console.log('connected to DB');
  },
);
app.use(express.json());
app.use(morgan('tiny'));
app.use(routes);

app.use('/appVersion', (req, res) => res.send({ version: 1.0 }));

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log('Server started');
});
