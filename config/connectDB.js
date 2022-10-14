const mongoose = require("mongoose");
// const db = `mongodb://localhost:27017/foodu`;
const { DB_USER, DB_PASS } = require("../config/envConfig");
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.djzcyyl.mongodb.net/foodapp`);
    console.log("Connection successfull");
  } catch (error) {
    console.log(error);
    process.exit(); 
  } 
}; 

module.exports = connectDB;
