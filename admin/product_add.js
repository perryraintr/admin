var app = angular.module('admin', []);
app.controller('product_add', function($scope, $http) {
	$scope.add = function() {
		var formdata = new FormData(document.getElementById("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "admin_product_add.a",
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