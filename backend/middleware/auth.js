import jwt from "jsonwebtoken";
export const verify_user = (req,res,next) => {
    const token = req.cookies.session
    try {
    var decoded = jwt.verify(token, "1234");
    if(decoded){
        req.user = decoded
        next()
    }
  } catch (err) {
    res.clearCookie('session')
    res.json({status : 404 , message : 'Hacker hai hacker'})
  }
};
