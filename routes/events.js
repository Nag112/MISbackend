let events = require('../models/events.model');
const router = require('express').Router();
router.route('/get').get((req,res)=>{    
    events.find().then(data=>res.json(data)).catch(err=>console.log(err))
});
router.route('/add').post((req,res)=>
{
    events.create({            
        name:req.body.name,
        category: req.body.name,
        requirements: req.body.require
        })
        res.sendStatus(200)
})
module.exports = router;
