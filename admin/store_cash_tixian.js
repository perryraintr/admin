var app = angular.module('admin', []);
app.controller('store_cash_tixian', function($scope, $http) {
	if(!getCheckLogin()) {
		location.href = "admin_login.html";
	}
	
	var page = GetQueryInt("page");

	$http.get(getHeadUrl() + "store_cash.a?type=-1&page=" + (page > 0 ? page : 1)).success(function(response) {
		$scope.json = response.body.array;
	});

	$scope.modify = function(row, index) {
		if(confirm("确定修改提现状态？")) {
			var id = $("guid" + index).value;
			var status = $("status" + index).value;
			var payment = $("payment" + index).value;
			$http({
				method: 'POST',
				url: getHeadUrl() + "store_cash_modify.a",
				data: "id=" + id + "&status=" + status + "&payment=" + payment,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(response) {
				if(status == 1) {
					alert("提现状态修改成功");
					if(row.merchant_getui_id.length > 0) {
						$http.get(getHeadUrl() + "getui.a?cid=" + row.merchant_getui_id + "&title=&body=品社已处理你的提现需求，预计24小时内到账，请注意查收。").success(function(response) {});
					}
				}
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
		$http.get(getHeadUrl() + "wechat_send.a?wcid=" + model.merchant_wechat_id + "&m=" + message).success(function() {
			alert("发送成功");
		});
	}

});