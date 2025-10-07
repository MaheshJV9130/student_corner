import express from 'express'
import multer from 'multer'

import { login, new_user } from '../controller/Auth.controller.js'
import { verify_user } from '../middleware/auth.js'
const upload = multer()
const router = express.Router()

router.post("/new-user",upload.single("profile"),new_user)
router.post("/login",login)
router.get("/user",verify_user,)
export default router


