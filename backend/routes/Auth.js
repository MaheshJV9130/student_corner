import express from 'express'
import multer from 'multer'

import { fetch_user_data, login, new_user, update_user_data } from '../controller/Auth.controller.js'
import { verify_user } from '../middleware/auth.js'

const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router()

router.post("/new-user",new_user)
router.post("/login",login)
router.post("/update",verify_user ,upload.any() , update_user_data)
router.get("/user",verify_user,fetch_user_data)
export default router


