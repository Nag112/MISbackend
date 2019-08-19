const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    const loginSchema = new Schema(
        { 
            cid: String,
            designation: String,
            password: String
        }
    )   
    const Users = mongoose.model('Users', loginSchema);
    // console.log(Users.find())
module.exports = Users;
    
