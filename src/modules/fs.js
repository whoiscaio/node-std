const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/teste'), (err) => {
  if (err) {
    return console.log(err);
  }

  fs.writeFile(
    path.join(__dirname, '/teste', 'text.txt'),
    "my text",
    (err) => {
      if(err) return console.log(err);

      fs.appendFile(
        path.join(__dirname, '/teste', 'text.txt'),
        "\nother line",
        (err) => {
          if(err) return console.log(err);

          fs.readFile(
            path.join(__dirname, '/teste', 'text.txt'),
            "utf8",
            (err, data) => {
              if(err) return console.log(err);
          
              console.log(`
              
              ${data}
          
              `);
            }
          )
        }
      )
    }
  )
})