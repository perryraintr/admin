var app = angular.module('admin', []);
app.controller('post_product', function($scope, $http) {

	$scope.productid = GetQueryString("productid");
	$scope.postid = GetQueryString("postid");
	
	$scope.modify = function() {
		var formdata = new FormData($("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "admin_post_product.a",
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