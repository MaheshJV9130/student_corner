import { connect_database } from "./database.js"
import Student from "../models/Student.js"
const check_user = async(email) => {
  connect_database()
  const user = await Student.findOne({email:email})
  if(user){
    return true
  }else{
    return false
  }
}

export default check_user