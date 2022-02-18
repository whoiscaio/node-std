const mongoose = require('mongoose');

console.log(process.env);

const MONGODB_ADDRESS = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodbpracticewithnode.3sfzl.mongodb.net/database?retryWrites=true&w=majority`;

async function connect() {
  await mongoose.connect(MONGODB_ADDRESS, (error) => {
    if (error) {
      return console.log('Error trying to connect to MongoDB: ', error);
    }

    console.log('Successfuly integrated with MongoDB');
  });
}

module.exports = connect;