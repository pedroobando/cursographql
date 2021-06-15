// console.log('hola academia');

import express from 'express';
import compression from 'compression';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
  res.status(200).send('Hola a la academia Online');
});

const PORT = 5200;
app.listen(PORT, () => {
  console.log(`Server academia online - GraphQL Runing at:http://localhost:${PORT}`);
});
