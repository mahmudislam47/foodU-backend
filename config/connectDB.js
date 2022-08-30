const mongoose = require("mongoose");
// const db = `mongodb://localhost:27017/poco`;
// const { DB_USER, DB_PASS } = require("../config/envConfig");
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://mongotestdb:SY1U4gakEVRsn8y6@cluster0.djzcyyl.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Connection successfull");
  } catch (error) {
    console.log(error);
    process.exit(); 
  } 
}; 

module.exports = connectDB;
