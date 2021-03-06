var app = angular.module('admin', []);
app.controller('store_cash', function($scope, $http) {
	var sid = GetQueryInt("sid");
	var page = GetQueryInt("page");

	if(sid > 0) {
		$http.get(getHeadUrl() + "store_cash.a?sid=" + sid + "&page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
		});
	} else {
		$http.get(getHeadUrl() + "store_cash.a?page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
		});
	}

	$scope.modify = function(index) {
		if(confirm("确定修改？")) {
			var id = $("guid" + index).value;
			var status = $("status" + index).value;
			$http({
				method: 'POST',
				url: getHeadUrl() + "store_cash_modify.a",
				data: "id=" + id + "&status=" + status,
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
			$http.get(getHeadUrl() + "store_cash_remove.a?id=" + id).success(function(response) {
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

});