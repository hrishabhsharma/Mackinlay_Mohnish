const mongoose = require("mongoose");

async function ConnectDb() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);

    console.log("Successfully Established Connection with MongoDB");
  } catch (error) {

    console.log("Failed to Establish Connection with MongoDB with Error:", error);
  }
}

module.exports = ConnectDb;
