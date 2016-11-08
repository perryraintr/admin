var app = angular.module('admin', []);
app.controller('feature2', function($scope, $http) {
	$http.get(getHeadUrl() + "store_feature2_image.a?page=1").success(function(response) {
		$scope.json = response.body.array;
	});
});