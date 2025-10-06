import { connect_database } from "./database.js";
import Student from "../models/Student.js";

export const not_exists = async (email) => {
  connect_database();
  const user = await Student.findOne({ email: email });

  if (user) {
    return false;
  } else {
    return true;
  }
};
