var app = angular.module('admin', []);
app.controller('feature1_modify', function($scope, $http) {
	$http.get(getHeadUrl() + "store_feature1_image.a?id=" + GetQueryString("id")).success(
		function(response) {
			$scope.tag = response.body;		
		}
	);
	
	$scope.modify = function() {
		var formdata = new FormData($("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "store_feature1_image_modify.a",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.json = response.body;
			alert("修改成功");
		});
	}
	
});