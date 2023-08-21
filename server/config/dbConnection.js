const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      `connected to db: ${connect.connection.name} ${connect.connection.host} `
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
