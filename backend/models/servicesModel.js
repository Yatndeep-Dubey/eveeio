const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {

     name:String,
     phone_number:Number,
     email:String,
     date:String,
     time:String
  },
  {
    timestamps:true
  }
);

const servicesModel = mongoose.model("servicesModel", formSchema);

module.exports = servicesModel;

