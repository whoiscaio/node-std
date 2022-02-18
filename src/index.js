const express = require('express');
const router = require('./routes');

const PORT = 3000;

const app = express();
app.use(router);

app.listen(PORT, () => {
  console.log(`App running at https://localhost:${PORT}`);
})