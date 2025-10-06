import jwt from 'jsonwebtoken'

export const get_token = async(email , id , student_name) => {
  
  const token =  jwt.sign({ email : email , id : id , student_name : student_name }, '1234');
  return token
}
