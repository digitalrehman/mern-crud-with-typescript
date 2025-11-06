import mongoose from "mongoose";
import "dotenv/config";
const db_connection = async () => {
  let MONGO_URL = process.env.DB_URI!;
  if (!MONGO_URL) {
    throw new Error(
      "MongoDB connection string is not defined in environment variables"
    );
  }
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to database");
  } catch (error) {
    console.log("mongodb", error);
    process.exit(1);
  }
};
export default db_connection;
