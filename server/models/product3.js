console.log("Ia m in the model-->product3.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var Product3Schema = new mongoose.Schema({
_users: {type: Schema.Types.ObjectId, ref: 'User'},

 username: {
		type:String
	},

 bid : {
    type:Number,
    required: [true, "Product3 Bid is required"],
    	min: [1,"Product3 Bid must greater than 0 or the last bid"]
  },


}
,{timestamps:true})


var Product3 = mongoose.model('Product3', Product3Schema)
