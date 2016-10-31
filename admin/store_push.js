var app = angular.module('admin', []);
app.controller('store_push', function($scope, $http) {

	$scope.sid = GetQueryInt("sid");

	$http.get(getHeadUrl() + "store_push.a?sid=" + $scope.sid).success(function(response) {
		$scope.json = response.body.array;
	});

	$scope.deleteAction = function(model) {
		if(confirm("are you sure remove it")) {
			$http.get(getHeadUrl() + "store_push_remove.a?id=" + model.guid).success(function(response) {
				window.location.reload();
			});
		}
	}

});