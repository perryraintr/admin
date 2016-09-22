var app = angular.module("admin", []);
app.controller("admin_raintr", function($scope, $http, $sce) {

	if (!getCheckLogin()) {
		location.href = "admin_login.html";
	}
	
	$scope.list = [{
		"name": "品社会员",
		"choose": true,
		"href": "member.html"
	}, {
		"name": "咖啡商品",
		"choose": false,
		"href": "commodity.html"
	}, {
		"name": "咖啡馆",
		"choose": false,
		"href": "store.html"
	}, {
		"name": "后台订单",
		"choose": false,
		"href": "order.html"
	}, {
		"name": "寻咖活动",
		"choose": false,
		"href": "store_activity.html"
	}];
	
	$scope.currentHref = $sce.trustAsResourceUrl($scope.list[0].href);
	console.log($scope.currentHref);
	
	$scope.currentUrl = function(row) {
		for (var i = 0; i < $scope.list.length; i++) {
			$scope.list[i].choose = false;
		}
		row.choose = true;
		$scope.currentHref = $sce.trustAsResourceUrl(row.href);
		console.log($scope.currentHref);
	}
});