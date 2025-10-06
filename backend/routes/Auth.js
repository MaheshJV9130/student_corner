import express from 'express'
import { login, new_user } from '../controller/Auth.controller.js'

const router = express.Router()

router.post("/new-user",new_user)
router.post("/login",login)
export default router


