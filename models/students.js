const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const studentSchema = new Schema(
    {   
        uid:String,     
        name: String,
        phone:String,
        email:String,
        cid: String,
        address:String,
        branch:String,
        sec:String,
        year:String,
        sem:String,
        myCourses:[String]
    }
)
const Students = mongoose.model('Students', studentSchema);
module.exports = Students;