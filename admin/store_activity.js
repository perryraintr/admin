var app = angular.module('admin', []);
app.controller('store_activity', function($scope, $http) {

	if(!getCheckLogin()) {
		location.href = "admin_login.html";
	}

	$http.get(getHeadUrl() + "activity.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
		function(response) {
			$scope.json = response.body.array;
		}
	);

});