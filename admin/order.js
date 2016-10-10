var app = angular.module('admin', []);
app.controller('order', function($scope, $http) {
	if(!getCheckLogin()) {
		location.href = "admin_login.html";
	}

	var mid = GetQueryInt("mid");
	var page = GetQueryInt("page");
	var ceshi = GetQueryInt("ceshi");

	if(mid > 0) {
		$http.get(getHeadUrl() + "order.a?mid=" + mid + "&page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
			for(var i = 0; i < $scope.json.length; i++) {
				$scope.orderDetail($scope.json[i], i);
			}
		});
	} else {
		$http.get(getHeadUrl() + "order.a?page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
		});
	}

	$scope.modify = function(index) {
		var id = $("guid" + index).value;
		var orderno = $("orderno" + index).value;
		var grind = $("grind" + index).value;
		var cost = $("cost" + index).value;
		var memo = $("memo" + index).value;
		var status = $("status" + index).value;
		$http({
			method: 'POST',
			url: getHeadUrl() + "order_modify.a",
			data: "id=" + id + "&orderno=" + orderno + "&grind=" + grind + "&cost=" + cost + "&memo=" + memo + "&status=" + status,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).error(function(data, state) {
			alert("信息过长");
		});
	}

	$scope.delete = function(id) {
		if(confirm("are you sure remove it")) {
			$http.get(getHeadUrl() + "order_remove.a?id=" + id).success(function(response) {
				window.location.reload();
			});
		}
	}

	$scope.sendMessage = function(model, index) {
		var message = $("message" + index).value;
		$http.get(getHeadUrl() + "wechat_send.a?wcid=" + model.member_wechat_id + "&m=" + message).success(function() {
			alert("发送成功");
		});
	}

	$scope.sendMessage2 = function(model, index) {
		var message2 = $("message2" + index).value;
		$http.get(getHeadUrl() + "wechat_send.a?wcid=" + model.member_wechat_id + "&express=http://www.sf-express.com/mobile/cn/sc/dynamic_functions/waybill/waybill_query_info.html?billno=" + message2 +"&title=喔耶！您的咖啡已上路，预计明天中午送达。&deliver=顺丰&order=" + message2).success(function() {
			alert("发送成功");
		});
	}


	$scope.searchClicked = function() {
		var orderNo = document.getElementById("orderNo").value;
		if(orderNo.length == 0) {
			$http.get(getHeadUrl() + "order.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
				function(response) {
					$scope.json = response.body.array;
				}
			);
		} else {
			if(orderNo.length > 10) {
				$http.get(getHeadUrl() + "order.a?orderno=" + orderNo).success(function(response) {
					$scope.json = [];
					$scope.json.push(response.body);
				});
			} else {
				$http.get(getHeadUrl() + "order.a?id=" + orderNo).success(function(response) {
					$scope.json = [];
					$scope.json.push(response.body);
				});
			}
		}
	}

	$scope.status1Clicked = function() {
		$http.get(getHeadUrl() + "order.a?status=1").success(function(response) {
			$scope.json = [];
			$scope.json = response.body.array;
		});
	}

	$scope.status2Clicked = function() {
		$http.get(getHeadUrl() + "order.a?status=2").success(function(response) {
			$scope.json = [];
			$scope.json = response.body.array;
		});
	}

});