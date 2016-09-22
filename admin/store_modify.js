var app = angular.module('admin', []);
app.controller('store_modify', function($scope, $http) {
	$http.get(getHeadUrl() + "store.a?id=" + GetQueryString("id")).success(
		function(response) {
			$scope.store = response.body;		
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