import mongoose, { connect } from "mongoose";

export const connect_database = async() => {
  try {
    await connect(process.env.DB_URL)
    console.log("DB Connected")
  } catch (error) {
    console.log("Failed to connect with DB")
  }
}
