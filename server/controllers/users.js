var mongoose = require('mongoose')
var User = mongoose.model('User')
var Product1 = mongoose.model('Product1')
var Product2 = mongoose.model('Product2')
var Product3 = mongoose.model('Product3')



console.log("I am at the users Controller-Backend")

function UsersController() {

    this.addUser = function(req, res) {
        User.findOne({ name: req.body.name, id: req.body._id }, function(err, user) {
            if (err) {
                res.json(err)
            } else {
                if (user == null) {
                    var newUser = User({ name: req.body.name })
                    newUser.save(function(newerr) {
                        if (newerr) {
                            res.json(newerr)
                        } else {
                            res.json(newUser)
                        }
                    })
                } else { res.json(user) }
            }


        })
    }


    this.getUser = function(req, res) {
        User.find({}).populate('_user').exec(function(err, users) {
            if (err) {
                res.json(err)
            } else {
                res.json(users)
            }
        })
    }

    this.product1_bid = function(req,res) {
    Product1.findOne({ username:req.body.username,bid: req.body.bid, id: req.body._id}, function(err, product1) {
        if (err) {
            res.json(err)
        } else {
            if (product1 == null) {
                var newProduct1_bid = Product1({username:req.body.username, bid: req.body.bid, id: req.body._id})
                newProduct1_bid.save(function(newerr) {
                    if (newerr) {
                        res.json(newerr)
                    } else {
                        res.json(newProduct1_bid)
                    }
                })
            } else { res.json(product1) }
            }
        })
    }




    this.get_product1= function(req, res) {
        Product1.find({}).populate('_product1').exec(function(err, products) {
            if (err) {
                res.json(err)
            } else {
                res.json(products)
            }
        })
    }

    this.product2_bid = function(req,res) {
    Product2.findOne({ username:req.body.username,bid: req.body.bid, id: req.body._id}, function(err, product2) {
        if (err) {
            res.json(err)
        } else {
            if (product2 == null) {
                var newProduct2_bid = Product2({username:req.body.username, bid: req.body.bid, id: req.body._id})
                newProduct2_bid.save(function(newerr) {
                    if (newerr) {
                        res.json(newerr)
                    } else {
                        res.json(newProduct2_bid)
                    }
                })
            } else { res.json(product2) }
            }
        })
    }




    this.get_product2= function(req, res) {
        Product2.find({}).populate('_product2').exec(function(err, products) {
            if (err) {
                res.json(err)
            } else {
                res.json(products)
            }
        })
    }

	this.product3_bid = function(req,res) {
    Product3.findOne({ username:req.body.username,bid: req.body.bid, id: req.body._id}, function(err, product3) {
        if (err) {
            res.json(err)
        } else {
            if (product3 == null) {
                var newProduct3_bid = Product3({username:req.body.username, bid: req.body.bid, id: req.body._id})
                newProduct3_bid.save(function(newerr) {
                    if (newerr) {
                        res.json(newerr)
                    } else {
                        res.json(newProduct3_bid)
                    }
                })
            } else { res.json(product3) }
            }
        })
    }




    this.get_product3 = function(req, res) {
        Product3.find({}).populate('_product3').exec(function(err, products) {
            if (err) {
                res.json(err)
            } else {
                res.json(products)
            }
        })
    }


    this.refresh_all = function(req,res) {
        Product1.remove({}, function(err,product1) {
            if(err){
                res.json(err)
            }
            else{
                res.send()
            }


        });
        Product2.remove({}, function(err,product2) {
            if(err){
                res.json(err)
            }
            else{
                res.send()
            }
        

        });
        Product3.remove({}, function(err,product3) {
            if(err){
                res.json(err)
            }
            else{
                res.send()
            }
        

        });

    }

}




   
module.exports = new UsersController();