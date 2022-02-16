const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/teste'), (err) => {
  if(err) return console.log(err);

  console.log('Dir created');
});