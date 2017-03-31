app.factory('userFactory', ['$http', function($http) {
    

    function userFactory() {


        this.addUser = function(user, callback) {
            console.log("I am in factory" + user)
            $http.post('/add_user', user).then(function(r_data) {
                callback(r_data.data)
            })
        }


        this.getUser = function(callback) {
            $http.get('/get_user').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }


		this.product1_bid = function(product1, callback) {
            console.log("I am in product1_bid method-->factory" + product1)
            $http.post('/product1_bid', product1).then(function(r_data) {
                callback(r_data.data)
            })
        }


        this.getproduct1_bid = function(callback) {
            $http.get('/get_product1').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }

		this.product2_bid = function(product2, callback) {
            console.log("I am in product2_bid method-->factory" + product2)
            $http.post('/product2_bid', product2).then(function(r_data) {
                callback(r_data.data)
            })
        }


        this.getproduct2_bid = function(callback) {
            $http.get('/get_product2').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }

		this.product3_bid = function(product3, callback) {
            console.log("I am in product3_bid method-->factory" + product3)
            $http.post('/product3_bid', product3).then(function(r_data) {
                callback(r_data.data)
            })
        }


        this.getproduct3_bid = function(callback) {
            $http.get('/get_product3').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }

        this.refresh = function(callback){
			$http.get('/refresh_all').then(function(){
				callback()
			})
		}

    }

    return new userFactory();
}])