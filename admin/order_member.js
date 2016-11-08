var app = angular.module('admin', []);
app.controller('order_member', function($scope, $http) {
		if(!getCheckLogin()) {
			location.href = "admin_login.html";
		}

	var page = GetQueryInt("page");
	$http.get(getHeadUrl() + "order.a?vip=all&page=" + (page > 0 ? page : 1)).success(function(response) {
		$scope.json = response.body.array;
	});

	$scope.modify = function(index) {
		if(confirm("确定修改订单状态？")) {
			var id = $("guid" + index).value;
			var orderno = $("orderno" + index).value;
			var memo = $("memo" + index).value;
			var status = $("status" + index).value;
			$http({
				method: 'POST',
				url: getHeadUrl() + "order_modify.a",
				data: "id=" + id + "&orderno=" + orderno + "&memo=" + memo + "&status=" + status,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(response) {
				alert("修改成功");
			}).error(function(data, state) {
				alert("信息过长");
			});
		}
	}

	$scope.delete = function(id) {
		if(confirm("are you sure remove it")) {
			$http.get(getHeadUrl() + "order_remove.a?id=" + id).success(function(response) {
				window.location.reload();
			});
		}
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