var app = angular.module('admin', []);
app.controller('pv', function($scope, $http) {
	$http.get(getHeadUrl() + "admin_pv.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
		function(response) {
			$scope.pv = response.body.array;
		}
	);
	
	$scope.modify = function(pvid, count) {
		$http.get(getHeadUrl() + "admin_pv_modify.a?id=" + pvid + "&count=" + count).success(
			function(response) {
				$scope.json = response.body;
			}
		);
	}
	
});

function modify(_this) {
	angular.element(_this).scope().modify(_this.parentNode.previousElementSibling.innerHTML, _this.parentNode.firstElementChild.value);
}

function resetCount(_this) {
	_this.parentNode.firstElementChild.value = 0;
	angular.element(_this).scope().modify(_this.parentNode.previousElementSibling.innerHTML, 0);
}
