console.log("Ia m in the model-->user.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({

_product1s:{type: Schema.Types.ObjectId, ref :'Product1'},
_product2s:{type: Schema.Types.ObjectId, ref :'Product2'},
_product3s:{type: Schema.Types.ObjectId, ref :'Product3'},
// _orders: {type: Schema.Types.ObjectId, ref: 'Orders'},

  name : {
    type:String,
    required: [true, "First name is required"],
    trim: true,
    minlength: [6," First name must be atleast 6 letters"]
  }
}
,{timestamps:true})


  var User = mongoose.model('User', UserSchema)