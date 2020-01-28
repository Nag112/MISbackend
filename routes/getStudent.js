let student = require('../models/students');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.route('/').get((req,res)=>
{ let token =  req.get('token');
    if(token)
    {
        jwt.verify(token,'NagaC',(err,data)=>
        { 
            if(!err)            
            {   console.log(data.user_id) 
                student.findOne({ 'uid': data.user_id })
                .then(stu => {                     
                    let resp_data = {
                                    name:stu.name,
                                    phone:stu.phone,
                                    email:stu.email,
                                    cid:stu.cid,
                                    address:stu.address,
                                    branch:stu.branch,
                                    sem:stu.sem,
                                    year:stu.year,
                                    sec:stu.sec,
                                    myCourses:stu.myCourses
                                }
                    res.json(resp_data);
                 })
                .catch(err => { console.log(err);
                    res.status(404).send('User not found')});                       
            }
            else{
                res.status(403).send('In valid Token')
            }
        });
    }
    else{
        res.status(403).send('Unauthorized');
    }
});

router.route('/course').get((req,res)=>{
    let course = req.params.course;
    student.find({mycourses:course},{"cid":1,'_id':0}).then(stu=>{
        res.json(stu);
    })
})
module.exports = router;

