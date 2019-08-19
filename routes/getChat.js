let chat = require('../models/chat.model');
const router = require('express').Router();
router.route('/get').get((req,res)=>{
  // chat.deleteMany().then().catch();    
    chat.find().then(data=>res.json(data)).catch(err=>console.log(err))
});
router.route('/add').post((req,res)=>
{
    chat.create({
            author:req.body.uid,
            type:'text',
            data:{
                text:req.body.text
            }
        })
        res.sendStatus(200)
})
module.exports = router;