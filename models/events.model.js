const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    const eventsSchema = new Schema(
        {     
                name: String,
                category: String,
                requirements: String
                
            })   
    const events = mongoose.model('events', chatSchema);
    
module.exports = events;
    