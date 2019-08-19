const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    const chatSchema = new Schema(
        {     
                author: String,
                type: String,
                data: {
                  text: String
                }
            })   
    const chat = mongoose.model('chat', chatSchema);
    
module.exports = chat;
    