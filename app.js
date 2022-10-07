const express = require('express');
const { config } = require('dotenv');
const {
  mongoDBLive: dbIsConnected,
} = require('./model/db_settings/connection');
const { router: animalRouter } = require('./controller/router/animalRouter');

config();
dbIsConnected();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/', animalRouter);

app.get('/', (req, res) => {
  res.send('hello, world');
  console.log(`hello, world`);
});

app.listen(PORT, () => {
  console.log(`App is listening at  ${PORT}`);
});
