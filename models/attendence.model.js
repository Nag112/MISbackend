const mongoose = require('mongoose');
const schema = mongoose.Schema;

const attSchema = new schema(
    {
        uid:String,
        total_days:Number,
        working_days:Number,
        '1-07':{
            am:String,
            pm:String
       },
        '2-07':{
            am:String,
            pm:String
       },
        '3-07':{
            am:String,
            pm:String
       },
        '4-07':{
            am:String,
            pm:String
       },
        '5-07':{
            am:String,
            pm:String
       },
        '6-07':{
            am:String,
            pm:String
       },
        '7-07':{
            am:String,
            pm:String
       },
        '8-07':{
            am:String,
            pm:String
       },
        '9-07':{
            am:String,
            pm:String
       },
        '10-07':{
            am:String,
            pm:String
       },
        '11-07':{
            am:String,
            pm:String
       },
        '12-07':{
            am:String,
            pm:String
       },
        '13-07':{
            am:String,
            pm:String
       },
        '14-07':{
            am:String,
            pm:String
       },
        '15-07':{
            am:String,
            pm:String
       },
        '16-07':{
            am:String,
            pm:String
       },
        '17-07':{
            am:String,
            pm:String
       },
        '18-07':{
            am:String,
            pm:String
       },
        '19-07':{
            am:String,
            pm:String
       },
        '20-07':{
            am:String,
            pm:String
       },
        '21-07':{
            am:String,
            pm:String
       },
        '22-07':{
            am:String,
            pm:String
       },
        '23-07':{
            am:String,
            pm:String
       },
        '24-07':{
            am:String,
            pm:String
       },
        '25-07':{
            am:String,
            pm:String
       },
        '26-07':{
            am:String,
            pm:String
       },
        '27-07':{
            am:String,
            pm:String
       },
        '28-07':{
            am:String,
            pm:String
       },
        '29-07':{
            am:String,
            pm:String
       },
        '30-07':{
            am:String,
            pm:String
       },
        '31-07':{
            am:String,
            pm:String
       },
        '01-08':{
            am:String,
            pm:String
        },
        '02-08':{
            am:String,
            pm:String
        },
        '03-08':{
            am:String,
            pm:String
        },
        '04-08':{
            am:String,
            pm:String
        },
        '05-08':{
            am:String,
            pm:String
        },
        '06-08':{
            am:String,
            pm:String
        },
        '07-08':{
            am:String,
            pm:String
        },
        '08-08':{
            am:String,
            pm:String
        },
        '09-08':{
            am:String,
            pm:String
        },
        '10-08':{
            am:String,
            pm:String
        },
        '11-08':{
            am:String,
            pm:String
        },
        '12-08':{
            am:String,
            pm:String
        },
        '13-08':{
            am:String,
            pm:String
        },
        '14-08':{
            am:String,
            pm:String
        },
        '15-08':{
            am:String,
            pm:String
        },
        '16-08':{
            am:String,
            pm:String
        },
        '17-08':{
            am:String,
            pm:String
        },
        '18-08':{
            am:String,
            pm:String
        },
        '19-08':{
            am:String,
            pm:String
        },
        '20-08':{
            am:String,
            pm:String
        },
        '21-08':{
            am:String,
            pm:String
        }
        ,
        '22-08':{
            am:String,
            pm:String
        },
        '23-08':{
            am:String,
            pm:String
        },
        '24-08':{
            am:String,
            pm:String
        },
        '25-08':{
            am:String,
            pm:String
        },
        '26-08':{
            am:String,
            pm:String
        },
        '27-08':{
            am:String,
            pm:String
        },
        '28-08':{
            am:String,
            pm:String
        },
        '29-08':{
            am:String,
            pm:String
        },
        '30-08':{
            am:String,
            pm:String
        }, 
        "31-08" : {
            "am" : String, 
            "pm" : String
        }, 
        "01-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "02-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "03-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "04-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "05-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "06-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "07-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "08-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "09-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "10-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "11-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "12-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "13-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "14-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "15-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "16-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "17-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "18-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "19-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "20-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "21-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "22-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "23-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "24-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "25-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "26-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "27-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "28-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "29-09" : {
            "am" : String, 
            "pm" : String
        }, 
        "30-09" : {
            "am" : String, 
            "pm" : String
        }
   })

   let att = mongoose.model('attendances', attSchema);
   //console.log(att.find())
   module.exports = att; 
   