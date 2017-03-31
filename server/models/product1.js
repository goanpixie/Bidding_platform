console.log("Ia m in the model-->product1.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var Product1Schema = new mongoose.Schema({
_users: {type: Schema.Types.ObjectId, ref: 'User'},

 username: {
		type:String
	},

 bid : {
    type:Number,
    required: [true, "Product1 Bid is required"],
    	min: [1,"Product1 Bid must greater than 0 or the last bid"]
  },


}
,{timestamps:true})


var Product1 = mongoose.model('Product1', Product1Schema)
