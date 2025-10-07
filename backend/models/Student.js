import { Schema, model } from "mongoose";

const student_schema = new Schema({
  student_name: { type: String, required: true },
  college_name: { type: String,  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roll_number: { type: Number,  },
  year:String,
  branch: { type: String,  },
  profile:String
});
const Student = model("Student",student_schema)
export default Student