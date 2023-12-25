const mongoose = require("mongoose");
const ShiftSchema = mongoose.Schema(
  {
    location: { type: String, require: true },  
    date: { type: String, require: true },
    time: { type: String, require: true },
    type: { type: String, require: true },
    duration: { type: String, require: true },
    client: { type: String, require: true },
    staffEmail:{type:String,default:""},
    notes: { type: String },
    clockin: [{
        time:{type:String},
        accuracy:{type:Number},
        coords:{
          lat:{type:Number},
          long:{type:Number}
        },
    }],
    clockout: [{
        time:{type:String},
        accuracy:{type:Number},
        coords:{
          lat:{type:Number},
          long:{type:Number}
        }
    }],
    casenotes: [
      {
        date: {type:String},
        time: { type: String },
        event: { type: String },
        notes: { type: String },
      },
    ],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shift", ShiftSchema);
