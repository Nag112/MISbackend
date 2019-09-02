const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const adSchema = new Schema(
    {   
        uid:String,     
        name: String,
        phone:String,
        email:String,
        cid: String,
        address:String,
        designation:String
    }
)
const Admin = mongoose.model('Admin', adSchema);

module.exports = Admin;