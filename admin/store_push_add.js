var app = angular.module('admin', []);
app.controller('store_push_add', function($scope, $http) {
	
	$scope.id = GetQueryInt("sid");
	
	$scope.add = function() {
		var formdata = new FormData($("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "store_push_add.a",
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