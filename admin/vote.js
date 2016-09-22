var app = angular.module('admin', []);
app.controller('vote', function($scope, $http) {
	$http.get(getHeadUrl() + "admin_vote.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
		function(response) {
			$scope.json = response.body.array;
		}
	);
});