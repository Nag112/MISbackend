const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('express').Router();
const loginRouter = require('./routes/loginRouter');
const getStudent = require('./routes/getStudent');
const Attendance = require('./routes/Attendance');
const getFaculty = require('./routes/getFaculty');
const getAdmin = require('./routes/getAdmin');
const getChat = require('./routes/getChat');
const stud = require('./routes/student');
require('dotenv').config();
const session = require('express-session');
const app = express();
app.use(router);

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = "mongodb://fantastic:Fantastic4@ds359847.mlab.com:59847/heroku_1vbpcvlk";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true },(err)=>{});
const connection = mongoose.connection;
connection.once('open', () => { console.log("Connection successfull") });

app.use('/verifyuser',loginRouter);
app.use('/fetchstudent',getStudent);
app.use('/fetchfaculty',getFaculty);
app.use('/fetchadmin',getAdmin)
app.use('/attendance',Attendance);
app.use('/chat',getChat);
app.use('/student',stud);
app.get('/fetchcourse',(req,res)=>
{
    console.log(req.params.id)
    res.send('http://www.africau.edu/images/default/sample.pdf')
});
app.listen(port, () => {
    console.log(`Server running : ${port}`);
});
