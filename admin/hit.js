var app = angular.module('admin', []);
app.controller('hit', function($scope, $http) {
	$http.get(getHeadUrl() + "admin_hit.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
		function(response) {
			$scope.json = response.body.array;
		}
	);

	$scope.remove = function(guid) {
		$http.get(getHeadUrl() + "admin_hit_remove.a?id=" + guid).success(
			function(response) {
				 window.location.href = window.location.href;
			}
		);
	}
});