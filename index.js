require('dotenv').config();

const express = require('express');
const router = require('./src/routes');
const connect = require('./src/database/connect');

const PORT = 3000;

connect();

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App running at https://localhost:${PORT}`);
})