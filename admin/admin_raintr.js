var app = angular.module("admin", []);
app.controller("admin_raintr", function($scope, $http, $sce) {

//	if (!getCheckLogin()) {
//		location.href = "admin_login.html";
//	}
	
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
		"name": "咖啡馆订单",
		"choose": false,
		"href": "store_order.html"
	}, {
		"name": "电商订单",
		"choose": false,
		"href": "order_store.html"
	}, {
		"name": "寻咖活动",
		"choose": false,
		"href": "store_activity.html"
	}, {
		"name": "提现列表",
		"choose": false,
		"href": "store_cash_tixian.html"
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
		document.getElementById("refreshFrames").src = $scope.currentHref;
	}
});