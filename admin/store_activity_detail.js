var app = angular.module('admin', []);
app.controller('store_activity_detail', function($scope, $http) {

	$scope.aid = GetQueryString("aid");
	
	$http.get(getHeadUrl() + "activity_detail.a?aid=" + $scope.aid + "&page" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
		function(response) {
			$scope.json = response.body.array;
		}
	);

});