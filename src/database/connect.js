const mongoose = require('mongoose');

const MONGODB_ADDRESS = 'mongodb+srv://admin:DlTkYTKwWKHcxh8J@usersdatabase.3sfzl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function connect() {
  await mongoose.connect(MONGODB_ADDRESS, (error) => {
    if (error) {
      return console.log(error);
    }

    console.log("Connection successfully stablished with MongoDB.");
  });
}

module.exports = connect;