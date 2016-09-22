var app = angular.module('admin', []);
app.controller('product', function($scope, $http) {
	var t2 = (GetQueryInt("t2") > 0 ? ("t1=" + GetQueryInt("t1") + "&t2=" + GetQueryInt("t2")) + "&" : "");

	$http.get(getHeadUrl() + "admin_product.a?" + t2 + "page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
		function(response) {
			$scope.json = response.body.array;
		}
	);
	
	$scope.search = function() {
		$http.get(getHeadUrl() + "admin_product.a?name=" + $scope.searchKey).success(
			function(response) {
				$scope.json = response.body.array;
			}
		);	
	}
	
});