var app = angular.module('admin', []);
app.controller('order_add', function($scope, $http) {
	$scope.add = function() {
		var formdata = new FormData($("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "order_add.a",
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