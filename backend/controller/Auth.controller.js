import check_user from "../lib/already_login.js";
import { connect_database } from "../lib/database.js";
import { check_pass, hash_pass } from "../lib/hash_pass.js";
import { get_token } from "../lib/jwt.js";
// import { not_exists } from "../lib/not_exists.js";
import Student from "../models/Student.js";
import bufferToUrl from "../lib/cloudinary.js";


export const new_user = async (req, res) => {
  connect_database();
  const { student_name, email, password } = req.body;
  const file = req.file;
  
  const already_exists = await check_user(email);
  if (already_exists) {
    res.send({ status: 404, message: "Email is already exits" });
  } else {
    const hash = await hash_pass(password);
    let profileURL =
        "https://res.cloudinary.com/socket-verse/image/upload/v1759833322/defaultpic_fgj0sc.jpg";
      if (file) {
        profileURL = await bufferToUrl(file);
      }
    const create_user = new Student({
      profile:profileURL,
      student_name: student_name,
      email: email,
      password: hash,
    });
    const user = await create_user.save();
    const token = await get_token(user.email, user._id, user.student_name , user.profile);
    res.cookie("session", token);
    res.send({ status: 200, message: "Login success" });
  }
};

export const login = async (req, res) => {
  connect_database();
  const { email, password } = req.body;
  const user =  await Student.findOne({email:email})
  if(user){
    const pass_check = await check_pass(password , user.password)
    if(pass_check){
      const token = await get_token(user.email , user._id , user.student_name , user.profile)
      res.cookie("session",token)
      res.send({status:200,message:"Logged"})

    }else{
      res.send({status:404,message:"Password is incorrect"})
    }
  }else{
      res.send({status:404,message:"User not found"})
  }
};

export const fetch_user_data = async(req,res) => {
  connect_database()  
  const {email} = req.user
  const user_data = await Student.findOne({email:email})
  if(user_data){
    res.send({status:200,data:user_data})
  }else{
    res.send({status:404,message:"Error while fetching user data , try again"})
  }

}
