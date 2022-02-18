const express = require('express');
const connect = require('./database/connect');
const router = require('./routes');

connect();

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${PORT}`);
});