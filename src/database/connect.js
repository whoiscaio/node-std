const mongoose = require('mongoose');

const MONGODB_ADDRESS = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@usersdatabase.3sfzl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

async function connect() {
  await mongoose.connect(MONGODB_ADDRESS, (error) => {
    if (error) {
      return console.log(error);
    }

    console.log("Connection successfully stablished with MongoDB.");
  });
}

module.exports = connect;