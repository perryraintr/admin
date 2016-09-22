var app = angular.module('admin', []);
app.controller('vote_modify', function($scope, $http) {
	$http.get(getHeadUrl() + "admin_vote.a?id=" + GetQueryString("id")).success(
		function(response) {
			$scope.vote = response.body;	
		}
	);
	
	$scope.modify = function() {
		var formdata = new FormData($("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "admin_vote_modify.a",
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