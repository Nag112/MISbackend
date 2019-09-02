let marks = require('../models/marks');
const router = require('express').Router();
router.route('/marks/update').get((req,res)=>{
    marks.findOneAndUpdate({cid:req.get('cid')},
        {$set:{mid:req.get('mid'),course:req.get('course'),marks:req.get('marks')}})
        .then(res.send({"msg":"Successfully updated"}))
})
router.route('/marks/get').get((req,res)=>
marks.findOne({cid:req.get('cid')}).then((data)=>res.send(data)).catch()
)
router.route('/marks').get((req,res)=>{
   // marks.deleteMany({}).then(()=>res.send('deleted')).catch()
  console.log(req.get('cid'));
//    res.send("")
    marks.create({cid:req.get('cid'),mid:req.get('mid'),course:req.get('course'),marks:req.get('marks')})
    .then(res.send("inserted")).catch()
})
module.exports = router;