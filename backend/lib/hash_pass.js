import bcrypt from "bcryptjs";

export const hash_pass = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pass, salt);
  return hash;
};

export const check_pass = async(pass , hash)=>{
 return await bcrypt.compare(pass, hash);
} 