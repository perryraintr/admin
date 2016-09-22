var app = angular.module('admin', []);
app.controller('post_modify', function($scope, $http) {
	$http.get(getHeadUrl() + "admin_post.a?id=" + GetQueryString("id")).success(
		function(response) {
			$scope.post = response.body;		
		}
	);
	
	$scope.modify = function() {
		var formdata = new FormData($("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "admin_post_modify.a",
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