var app = angular.module('admin', []);
app.controller('store_order', function($scope, $http) {
	var sid = GetQueryInt("sid");
	var page = GetQueryInt("page");
	var ceshi = GetQueryInt("ceshi");
	ceshi = 1;

	if(sid > 0) {
		$http.get(getHeadUrl() + "order.a?sid=" + sid + "&page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
		});
	} else {
		$http.get(getHeadUrl() + "order.a?sid=all&page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
		});
	}

	//	$scope.modify = function(index) {
	//		var id = $("guid" + index).value;
	//		var orderno = $("orderno" + index).value;
	//		var grind = $("grind" + index).value;
	//		var cost = $("cost" + index).value;
	//		var memo = $("memo" + index).value;
	//		var status = $("status" + index).value;
	//		$http({
	//			method: 'POST',
	//			url: "http://interface.pinshe.org/v1/order_modify.a",
	//			data: "id=" + id + "&orderno=" + orderno + "&grind=" + grind + "&cost=" + cost + "&memo=" + memo + "&status=" + status,
	//			headers: {
	//				'Content-Type': 'application/x-www-form-urlencoded'
	//			}
	//		}).error(function(data, state) {
	//			alert("信息过长");
	//		});
	//	}

		$scope.delete = function(id) {
			if(confirm("are you sure remove it")) {
				$http.get("http://interface.pinshe.org/v1/order_remove.a?id=" + id).success(function(response) {
					window.location.reload();
				});
			}
		}

});