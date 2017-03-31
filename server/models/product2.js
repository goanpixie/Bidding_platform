console.log("Ia m in the model-->product2.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var Product2Schema = new mongoose.Schema({
_users: {type: Schema.Types.ObjectId, ref: 'User'},

 username: {
		type:String
	},

 bid : {
    type:Number,
    required: [true, "Product2 Bid is required"],
    	min: [1,"Product2 Bid must greater than 0 or the last bid"]
  },


}
,{timestamps:true})


var Product2 = mongoose.model('Product2', Product2Schema)
