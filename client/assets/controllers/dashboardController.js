app.controller('dashboardController', ['$scope', '$location', 'userFactory', '$cookies',function($scope, $location, userFactory, $cookies) {

    $scope.errors = false;
    $scope.messages = [];
    $scope.newUser;
    $scope.product1_bids = [];
    $scope.product1 = {};
    $scope.canWeBid1 = false;
    $scope.product2_bids = [];
    $scope.product2 = {};
    $scope.canWeBid2 =false;
    $scope.product3_bids = [];
    $scope.product3 = {};
    $scope.canWeBid3 =false;



    
    if($cookies.getObject('newUser')){
		$scope.newUser = $cookies.getObject('newUser')
	}
	else{
		$location.url('/home')
	}


    $scope.getUser = function() {
        userFactory.getUser(function(data) {
            $scope.users = data
        })
    };
    $scope.getUser();




	$scope.logout = function(){
		$cookies.remove('newUser')
		$location.url('/home')

	}



	$scope.product1_bid = function() {
		$scope.product1.username = $scope.newUser.name;
		var currentBidder = {
			username: $scope.product1['username'],
			bid: $scope.product1['bid'],
			id: $scope.product1['_id']
		};

		$scope.canWeBid1 = $scope.product1_bids.every(function (existingBidder) {
			return existingBidder.bid <= currentBidder.bid;
		})

		if($scope.canWeBid1) {
	        userFactory.product1_bid($scope.product1, function(data) {
	            $scope.messages = []
	            if (data.errors) {
	                $scope.errors = true;
	                for (err in data.errors) {
	                    console.log(data.errors[err].message)
	                    $scope.messages.push(data.errors[err].message)
	                }
	            }
	        
	        })

	        $scope.getproduct1_bid();			
		}

    }


    $scope.getproduct1_bid = function() {
        userFactory.getproduct1_bid(function(data) {
            $scope.product1_bids = data
        })
    };
    $scope.getproduct1_bid();

	$scope.product2_bid = function() {
		$scope.product2.username = $scope.newUser.name;
		var currentBidder = {
			username: $scope.product2['username'],
			bid: $scope.product2['bid'],
			id: $scope.product2['_id']
		};

		$scope.canWeBid2 = $scope.product2_bids.every(function (existingBidder) {
			return existingBidder.bid <= currentBidder.bid;
		})

		if($scope.canWeBid2) {
	        userFactory.product2_bid($scope.product2, function(data) {
	            $scope.messages = []
	            if (data.errors) {
	                $scope.errors = true;
	                for (err in data.errors) {
	                    console.log(data.errors[err].message)
	                    $scope.messages.push(data.errors[err].message)
	                }
	            }
	        
	        })

	        $scope.getproduct2_bid();			
		}

    }


    $scope.getproduct2_bid = function() {
        userFactory.getproduct2_bid(function(data) {
            $scope.product2_bids = data
        })
    };
    $scope.getproduct2_bid();

	$scope.product3_bid = function() {
		$scope.product3.username = $scope.newUser.name;
		var currentBidder = {
			username: $scope.product3['username'],
			bid: $scope.product3['bid'],
			id: $scope.product3['_id']
		};

		$scope.canWeBid3 = $scope.product3_bids.every(function (existingBidder) {
			return existingBidder.bid <= currentBidder.bid;
		})

		if($scope.canWeBid3) {
	        userFactory.product3_bid($scope.product3, function(data) {
	            $scope.messages = []
	            if (data.errors) {
	                $scope.errors = true;
	                for (err in data.errors) {
	                    console.log(data.errors[err].message)
	                    $scope.messages.push(data.errors[err].message)
	                }
	            }
	        
	        })

	        $scope.getproduct3_bid();			
		}

    }


    $scope.getproduct3_bid = function() {
        userFactory.getproduct3_bid(function(data) {
            $scope.product3_bids = data
        })
    };
    $scope.getproduct3_bid();


    $scope.refresh = function(){
    	console.log("I am @front end Controller")
        userFactory.refresh(function(data) {
            $scope.getproduct1_bid();
            $scope.getproduct2_bid();
            $scope.getproduct3_bid();
            $location.url('/dashboard')
        });
    }
		
		


   




}])