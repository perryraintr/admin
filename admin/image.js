var app = angular.module('admin', []);
app.controller('image', function($scope, $http) {
	$scope.add = function() {
		var formdata = new FormData($("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "admin_image.a",
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