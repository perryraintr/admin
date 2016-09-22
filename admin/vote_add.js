var app = angular.module('admin', []);
app.controller('vote_add', function($scope, $http) {
	$scope.add = function() {
		var formdata = new FormData($("form_add"));	
		$http({
			method: 'POST',
			url: getHeadUrl() + "admin_vote_add.a",
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