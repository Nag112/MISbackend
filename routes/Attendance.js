let att = require('../models/attendence.model');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
var lastAttDate ;
var schedule = require('node-schedule');
 
var j = schedule.scheduleJob('17 * * * ', function(){
let today = new Date;
today = today.getDate+'-'+today.getMonth;
console.log(today);
  att.updateMany({$set:{

  }}).then().catch()
});
router.route('/get').get((req,res)=>{
    let token =  req.get('token');
    if(token)
    {
        jwt.verify(token,'Sridevi',(err,data)=>
        { 
            if(!err)
            {    att.findOne({uid:data.user_id}).then((data)=>res.send(data))
            .catch(err => { console.log(err);res.status(404).send('User not found')});                       
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
router.route('/test').get((req,res)=>
{
    let today = new Date;
    let month = today.getMonth()+1;
    let k = String(month).padStart(2,'0')
today = today.getDate()+'-'+k;
var obj= new Object;
obj[today]={  
    am:' ',
    pm:' '          
}
if(lastAttDate!==today)
{
    obj[today].am='H';
    att.updateMany({$set:obj}).then().catch()
}
else{
    
}
res.send(today)

})
router.route('/update').get((req,res)=>{
    let date = req.get('date');
    lastAttDate = date;
    let uid  = req.get('uid');
    let today = new Date;
    console.log(today);    
    var obj= new Object;
        obj[date]={  
            am:' ',
            pm:' '          
        }
    if(today.getHours()>13)    
    {    
        att.findOne({uid:uid}).then(
        (data)=>{
            let am = data[date].am
            if(am===' ')
         {obj[date].am='A';}
         else{
            obj[date].am=am;
         }
         obj[date].pm='P';
        } 
     ).catch();        
        att.updateOne({ 'uid': uid }, { $set: obj }).then(
            res.send('updated the pm')
        ).catch(
           // res.send('error')
        );       
       
    }
    else
    {
        obj[date].am = 'P';   
        att.updateOne({ 'uid': uid }, { $set: obj }).then(
            res.send('updated the am')
        ).catch(
           // res.send('error')
        );
    }
   
 })

 module.exports = router;
