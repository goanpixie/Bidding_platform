console.log('routes')
var users = require('../controllers/users.js');
module.exports = function(app){

	app.post('/add_user', users.addUser)
	app.get('/get_user', users.getUser)
	app.post('/product1_bid',users.product1_bid)
	app.get('/get_product1',users.get_product1)
	app.post('/product2_bid',users.product2_bid)
	app.get('/get_product2',users.get_product2)
	app.post('/product3_bid',users.product3_bid)
	app.get('/get_product3',users.get_product3)
	app.get('/refresh_all',users.refresh_all)




}
