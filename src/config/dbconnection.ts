import mongoose from "mongoose";
import "dotenv/config";
const db_connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default db_connection;
