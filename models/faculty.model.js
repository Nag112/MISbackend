const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const facSchema = new Schema(
    {   
        uid:String,     
        name: String,
        phone:String,
        email:String,
        cid: String,
        address:String,
        branch:String,
        In_sec:String,
        In_year:String,
        sem:String,
        Research_area:String,
        Qualification:String,
        myCourses:[String]
    }
)
const Faculty = mongoose.model('Faculty', facSchema);

module.exports = Faculty;