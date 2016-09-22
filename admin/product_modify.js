var app = angular.module('admin', []);
app.controller('product_modify', function($scope, $http) {
	$http.get(getHeadUrl() + "admin_product.a?id=" + GetQueryString("id")).success(
		function(response) {
			$scope.product = response.body;	
		}
	);
	
	$scope.modify = function() {
		var formdata = new FormData(document.getElementById("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "admin_product_modify.a",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.json = response.body;
			document.getElementById("qrcode").innerHTML = "";
			jQuery('#qrcode').qrcode({
				width:280,
				height:280,
				text: $scope.json.url
			});
		});
	}
	
});