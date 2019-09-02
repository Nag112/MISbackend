const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    const marksSchema = new Schema(
        { 
            cid: String,
            mid: String,
            course: String,
            marks:String
        }
    )   
    const marks = mongoose.model('marks', marksSchema);
module.exports = marks;
    
