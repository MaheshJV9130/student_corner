import express from 'express'
import Auth from './routes/Auth.js'
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
import {v2 as cloudinary} from 'cloudinary'

// cookieParser
const app = express()
const corsOption = {
    origin: 'http://localhost:5173',
    methods:['GET','POST','PUT'],
    credentials:true
}
configDotenv()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOption))
app.use(cookieParser())
app.use(express.json())
app.use("/auth",Auth)
app.get('/',(req,res)=>{
    res.send("This is backend for our application")
})


app.listen(3000,()=>{
    console.log("Running")
})