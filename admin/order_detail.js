var app = angular.module('admin', []);
app.controller('order_detail', function($scope, $http) {
	var id = GetQueryInt("id");
	
	$scope.isStore = false;
	$http.get(getHeadUrl() + "order.a?id=" + id).success(function(response) {
		$scope.row = response.body;
		if ($scope.row.details[0].store_guid > 0) {
			$scope.isStore = true;
			$scope.store = $scope.row.details[0];
		}
	});
	
});
	