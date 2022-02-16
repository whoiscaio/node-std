const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/teste'), (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('dir created');
})

fs.writeFile(
  path.join(__dirname, '/teste', 'text.txt'),
  "my text",
  (err) => {
    if(err) return console.log(err);

    console.log('file written');
  }
)

fs.appendFile(
  path.join(__dirname, '/teste', 'text.txt'),
  "\nother line",
  (err) => {
    if(err) return console.log(err);

    console.log('text appended');
  }
)