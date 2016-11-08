var app = angular.module('admin', []);
app.controller('feature1_add', function($scope, $http) {
	$scope.add = function() {
		var formdata = new FormData($("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "store_feature1_image_add.a",
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