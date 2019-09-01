let att = require("../models/attendence.model");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
var lastAttDate;
var schedule = require("node-schedule");
var j = schedule.scheduleJob("0 0 17 * * * ", function() {
  let today = new Date();
  let month = today.getMonth();
  month = month + 1;
  today = today.getDate() + "-" + month;
  console.log(today);
  if (lastAttDate == today) {
    att
      .updateMany({ $set: {} })
      .then()
      .catch();
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

router.route("/update").get(async (req, res) => {
  let today = req.get("date");
  let time = req.get("time");
  lastAttDate = today;
  let uid = req.get("uid");
  let now = new Date();
  var obj = new Object();
  var working ;
  obj[today] = {
    am: " ",
    pm: " "
  };
  var am;
  await att
    .findOne({ uid: uid })
    .then(data => {
      am = data[today].am;
      obj["total_days"] = data["total_days"];
      obj["working_days"] = data["working_days"];
      console.log(am);
    })
    .catch();
  if (time >= 13) {
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
        .catch
        // res.send('error')
        ();
    }
  } else {
    obj["working_days"] = obj["working_days"]+0.5;
    obj[today].am = "P";
    obj["total_days"]=obj["total_days"]+0.5;
    console.log(obj);
    att
      .updateOne({ uid: uid }, { $set: obj })
      .then(res.send("updated the am"))
      .catch
      // res.send('error')
      ();
  }
});

module.exports = router;
