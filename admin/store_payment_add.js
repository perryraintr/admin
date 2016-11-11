var app = angular.module('admin', []);
app.controller('store_payment_add', function($scope, $http) {
	
	$scope.sid = GetQueryInt("sid");
//	$scope.sid = 88;
	
	$scope.add = function() {
		var formdata = new FormData($("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "store_payment_add.a",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.json = response.body;
			console.log($scope.json);
			alert("添加成功");
		});
	}
});