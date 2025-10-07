import mongoose, { connect } from "mongoose";

export const connect_database = async() => {
  try {
    await connect("mongodb+srv://maheshVispute:maheshVispute@roomkart.b2hdd0a.mongodb.net/")
    console.log("DB Connected")
  } catch (error) {
    console.log("Failed to connect with DB")
  }
}
