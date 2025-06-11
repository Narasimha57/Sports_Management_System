import express from 'express'
import cors from 'cors'
import connectDB from './db/connectDB.js';
import routes from './routes/routes.js';


const app = express()
const port = 5000;
connectDB();
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Backend is Running")
})

//Routes
app.use('/api/v1/', routes)


app.listen(port, ()=>{
    console.log("Api is Running")
})