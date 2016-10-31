var app = angular.module('admin', []);
app.controller('merchant_modify', function($scope, $http) {
	$http.get(getHeadUrl() + "merchant.a?id=" + GetQueryString("id")).success(
		function(response) {
			$scope.tag = response.body;		
		}
	);
	
	$scope.modify = function() {
		var formdata = new FormData($("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "merchant_modify.a",
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