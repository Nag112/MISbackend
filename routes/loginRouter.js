let users = require('../models/users.model');
const router = require('express').Router();
const jwt = require('jsonwebtoken');


router.route('/').post((req, res) => {    
    users.findOne({ 'cid': req.body.userid, 'password': req.body.password })     
        .then(user => {                       
          if(user!=={}){ 
            jwt.sign({
                user_id:user._id
            },'Sridevi',{expiresIn:60*20},(err,token)=>
            {                            
               console.log(token);
                res.json({token:token,uid:user._id,designation:user.designation,name:user.name});
            });                      
        }
            else{               
                res.json({msg:true})
            }
        })
        .catch(err => { res.json(err) }); 
});

module.exports = router;

     
   