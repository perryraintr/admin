var app = angular.module('admin', []);
app.controller('store_modify', function($scope, $http) {
	$http.get(getHeadUrl() + "store.a?id=" + GetQueryString("id")).success(
		function(response) {
			$scope.store = response.body;
			$scope.store.feature1str = "";
			for(var j = 0; j < $scope.store.feature1s.length; j++) {
				$scope.store.feature1str += ($scope.store.feature1s[j].guid + ",");
			}
			$scope.store.feature2str = "";
			for(var j = 0; j < $scope.store.feature2s.length; j++) {
				$scope.store.feature2str += ($scope.store.feature2s[j].guid + ",");
			}
			
		}
	);

	$scope.modify = function() {
		var formdata = new FormData($("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "store_modify.a",
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