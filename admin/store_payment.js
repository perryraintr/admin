var app = angular.module('admin', []);
app.controller('store_payment', function($scope, $http) {
	
	$scope.sid = GetQueryInt("sid");
//	$scope.sid = 88;
	
	$http.get(getHeadUrl() + "store_payment.a?sid=" + $scope.sid + "&page=1").success(function(response) {
		$scope.json = response.body.array;
	});
});