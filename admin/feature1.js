var app = angular.module('admin', []);
app.controller('feature1', function($scope, $http) {
	$http.get(getHeadUrl() + "store_feature1_image.a?page=1").success(function(response) {
		$scope.json = response.body.array;
	});
});