let att = require("../models/attendence.model");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
var lastAttDate;
var working_days;
var schedule = require("node-schedule");

schedule.scheduleJob("0 0 17 * * * ", async function() {
  let today = new Date();
  let month = today.getMonth();
  month = month + 1;
  today = today.getDate() + "-" + month;
  if (lastAttDate == today) {
      var obj = new Object;
      obj[today]={
          am:'',
          pm:''
      }
      var nobj = new Object;
      nobj[today]={
          am:'A',
          pm:'A',
      }
  await  att
      .updateMany(obj, {$set: {nobj,"working_days":working_days+1}} )
      .then(()=>console.log("absent"))
      .catch();
      obj[today]={
        am:'P',
        pm:''
    }
    nobj[today]={
        am:'P',
        pm:'A',
    }
   await att
      .updateMany(obj, {$set: {nobj},"working_days":working_days+0.5} )
      .then()
      .catch();
  }
  else{
    var nobj = new Object;
    nobj[today]={
        am:'H',
        pm:'H',
    }
      att.updateMany({$set:{nobj}}).then().catch();
  }
});

router.route("/get").get((req, res) => {
  let token = req.get("token");
  if (token) {
    jwt.verify(token, "Sridevi", (err, data) => {
      if (!err) {
        att
          .findOne({ uid: data.user_id })
          .then(data => res.send(data))
          .catch(err => {
            console.log(err);
            res.status(404).send("User not found");
          });
      } else {
        res.status(403).send("In valid Token");
      }
    });
  } else {
    res.status(403).send("Unauthorized");
  }
});

router.route("/update/:uid").get(async (req, res) => {
  let today = new Date();
  let month = today.getMonth();
  let time = today.getHours();
  month = month + 1;
  today = "0"+today.getDate() + "-" + month;  
  lastAttDate = today;
  let uid = req.params.uid;
  var obj = new Object();
  obj[today] = {
    am: " ",
    pm: " "
  };
  var am;
  console.log(uid)
  await att
    .findOne({ uid: uid })
    .then(data => {
     am = data[today].am;
      obj["total_days"] = Number(data.total_days);
      obj["working_days"] = Number(data.working_days);
    })
    .catch();
    console.log(time)
  if (time >= 12) 
  {
    obj["working_days"] = obj["working_days"]+0.5;
    if (am === " ") {
      obj[today].am = "A";
      obj[today].pm = "P";      
      att
        .updateOne({ uid: uid }, { $set: obj })
        .then(res.send("updated the pm"))
        .catch(error => res.send("error"));
    } else {
      obj[today].am = am;
      obj[today].pm = "P";
      obj["total_days"]=obj["total_days"]+0.5; 
      console.log(obj);
      att
        .updateOne({ uid: uid }, { $set: obj })
        .then(res.send("updated the pm"))
        .catch(
           res.send('error')
        );
    }
  } else {
    console.log(obj["working_days"])
    obj["working_days"] = obj["working_days"]+0.5;
   // console.log(obj['working_days'])
    obj[today].am = "P";
   // console.log(obj['total_days'])
    obj["total_days"]=obj["total_days"]+0.5;
    console.log(obj);
    att
      .updateOne({ uid: uid }, { $set: obj })
      .then(res.send("updated the am"))
      .catch()
       res.send('error')
      ();
  }
});

module.exports = router;
