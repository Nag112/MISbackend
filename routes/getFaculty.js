let faculty = require('../models/faculty.model');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
router.route('/').get((req,res)=>
{ let token =  req.get('token');
    if(token)
    {
        jwt.verify(token,'Sridevi',(err,data)=>
        {
            console.log(data)
            if(!err)
            {                                          
                faculty.findOne({ 'uid': data.user_id })
                .then(fac => {                 
                    let resp_data = {
                                    name:fac.name,
                                    phone:fac.phone,
                                    email:fac.email,
                                    cid:fac.cid,
                                    address:fac.address,
                                    branch:fac.branch,
                                    sem:fac.sem,
                                    In_year:fac.In_year,
                                    In_sec:fac.In_sec,
                                    'Research area':fac.Research_area,
                                    Qualification:fac.Qualification,
                                    myCourses:fac.myCourses
                                }
                    console.log(resp_data);
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


module.exports = router;

