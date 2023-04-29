const express = require("express")
const {connection} =require("./db")
const {userRouter} = require("./routes/User.routes")
const {auth} = require("./middleware/auth.middleware")
const {noteRouter} = require("./routes/Note.routes")
const cors = require('cors')
require('dotenv').config() 

const app = express()

//using cors
app.use(cors())
app.use(express.json());
app.use("/users", userRouter);

app.use(auth);
app.use("/notes", noteRouter);

app.listen(process.env.port, async() => {
    try{
        await connection
        console.log("connected to db");
    }catch(err) {
        console.log(err)
        console.log("cannot connected to db")
    }
    console.log(`server is running at ${process.env.port}`);
})