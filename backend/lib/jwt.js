import jwt from "jsonwebtoken";

export const get_token = async (email, id, student_name, profile) => {
  const token = jwt.sign(
    { email: email, id: id, student_name: student_name, profile: profile },
    "1234"
  );
  return token;
};
