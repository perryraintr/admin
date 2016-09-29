var app = angular.module('admin', []);
app.controller('store_cash_tixian', function($scope, $http) {
	var page = GetQueryInt("page");

	$http.get(getHeadUrl() + "cash.a?type=-1&page=" + (page > 0 ? page : 1)).success(function(response) {
		$scope.json = response.body.array;
	});

	$scope.modify = function(index) {
		var id = $("guid" + index).value;
		var status = $("status" + index).value;
		var payment = $("payment" + index).value;
		$http({
			method: 'POST',
			url: getHeadUrl() + "cash_modify.a",
			data: "id=" + id + "&status=" + status + "&payment=" + payment,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).error(function(data, state) {
			alert("信息过长");
		});
	}

	$scope.delete = function(id) {
		if(confirm("are you sure remove it")) {
			$http.get(getHeadUrl() + "cash_remove.a?id=" + id).success(function(response) {
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