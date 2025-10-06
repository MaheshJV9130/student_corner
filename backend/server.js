import express from 'express'
import Auth from './routes/Auth.js'
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
// cookieParser
const app = express()

configDotenv()
app.use(cookieParser())
app.use(express.json())
app.use("/auth",Auth)
app.get('/',(req,res)=>{
    res.send("This is backend for our application")
})


app.listen(3000,()=>{
    console.log("Running")
})