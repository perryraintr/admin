var app = angular.module('admin', []);
app.controller('store_cash', function($scope, $http) {
	var id = GetQueryInt("id");
	//	id = 71;

	$http.get(getHeadUrl() + "store_cash.a?id=" + id).success(function(response) {
		$scope.row = response.body;
	});

	$scope.sendMessage = function() {
		var message = $("message").value;
		$http.get(getHeadUrl() + "wechat_send.a?wcid=" + $scope.row.member_wechat_id + "&m=" + message).success(function() {
			alert("发送成功");
		});
	}

	$scope.modify = function() {
		if(confirm("确定修改提现状态？")) {
			var status = $("status").value;
			var payment = $("payment").value;
			$http({
				method: 'POST',
				url: getHeadUrl() + "store_cash_modify.a",
				data: "id=" + $scope.row.guid + "&status=" + status + "&payment=" + payment,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).success(function(response) {
				if(status == 1) {
					alert("提现状态修改成功");
					if($scope.row.merchant_getui_id.length > 0) {
						$http.get(getHeadUrl() + "getui.a?cid=" + $scope.row.merchant_getui_id + "&title=&body=品社已处理你的提现需求，预计24小时内到账，请注意查收。").success(function(response) {});
					}
				}
			}).error(function(data, state) {
				alert("信息过长");
			});
		}
	}
});