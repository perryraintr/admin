var app = angular.module('admin', []);
app.controller('store_payment_modify', function($scope, $http) {
	$scope.sid = GetQueryInt("sid");
	$scope.paymentId = GetQueryInt("paymentid");
	
	$http.get(getHeadUrl() + "store_payment.a?id=" + $scope.paymentId).success(function(response) {
		$scope.payment = response.body;
	});
	
	$scope.mofity = function() {
		var formdata = new FormData($("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "store_payment_modify.a",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.json = response.body;
			console.log($scope.json);
			alert("修改成功");
		});
	}
});