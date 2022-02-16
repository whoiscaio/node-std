const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/teste'), (err) => {
  if (err) return console.log(err);

  console.log('dir created');

  fs.writeFile(path.join(__dirname, '/teste', 'index.js'), "console.log('hello node fs')", (err) => {
    if(err) return console.log(err);

    console.log('file created');
  })
})