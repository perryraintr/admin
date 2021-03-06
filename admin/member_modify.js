var app = angular.module('admin', []);
app.controller('member_modify', function($scope, $http) {
	$http.get(getHeadUrl() + "member.a?id=" + GetQueryString("id")).success(
		function(response) {
			$scope.tag = response.body;		
		}
	);
	
	$scope.modify = function() {
		var formdata = new FormData($("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "member_modify.a",
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