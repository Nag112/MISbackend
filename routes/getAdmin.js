let admin = require('../models/admin.model');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
router.route('/').get((req,res)=>
{ let token =  req.get('token');
    if(token)
    {
        jwt.verify(token,'Sridevi',(err,data)=>
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
                                    address:stu.address                                   
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

// router.route('/insert').get((req,res)=>{
//    admin.create({uid:"5d6d002306a97037a8b54514",     
//     name: "Naga Charan",
//     phone:"91 6303789153",
//     email:"raju11297@gmail.com",
//     cid: "AD123456",
//     address:"Mahabubnaagr",
//     designation:"Admin"
//     }).then(res.send("done")).catch()
// })
module.exports = router;

