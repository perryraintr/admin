var app = angular.module('admin', []);
app.controller('store_add', function($scope, $http) {

	$http.get(getHeadUrl() + "store_feature1_image.a?page=1").success(function(response) {
		$scope.feature1 = response.body.array;
	});

	$http.get(getHeadUrl() + "store_feature2_image.a?page=1").success(function(response) {
		$scope.feature2 = response.body.array;
	});

	$scope.add = function() {
		var formdata = new FormData($("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "store_add.a",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.json = response.body;
		});
	}
});