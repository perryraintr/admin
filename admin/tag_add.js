var app = angular.module('admin', []);
app.controller('tag_add', function($scope, $http) {
	$scope.add = function() {
		var formdata = new FormData($("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "admin_tag_add.a",
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