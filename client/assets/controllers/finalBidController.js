app.controller('finalBidController', ['$scope', '$location', 'userFactory', '$cookies',function($scope, $location, userFactory, $cookies) {

$scope.product1_bids =[];
$scope.product2_bids =[];
$scope.product3_bids =[];


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

        $scope.getproduct1_bid = function() {
        userFactory.getproduct1_bid(function(data) {
            $scope.product1_bids = data
        })
    };


    $scope.getproduct1_bid();

        $scope.getproduct2_bid = function() {
        userFactory.getproduct2_bid(function(data) {
            $scope.product2_bids = data
        })
    };



    $scope.getproduct2_bid();


    $scope.getproduct3_bid = function() {
        userFactory.getproduct3_bid(function(data) {
            $scope.product3_bids = data
        })
    };
    $scope.getproduct3_bid();


	$scope.logout = function(){
		$cookies.remove('newUser')
		$location.url('/home')

	}

	$scope.refresh = function(){
		$scope.product1_bids.length = 0;
		$scope.product2_bids.length = 0;
		$scope.product3_bids.length = 0;
		$location.url('/dashboard')
	}

 
}])
