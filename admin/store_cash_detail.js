var app = angular.module('admin', []);
app.controller('store_cash', function($scope, $http) {
	var id = GetQueryInt("id");
//	id = 71;
	
	$http.get(getHeadUrl() + "cash.a?id=" + id).success(function(response) {
		$scope.row = response.body;
	});
	
	$scope.sendMessage = function() {
		var message = $("message").value;
		$http.get(getHeadUrl() + "wechat_send.a?wcid=" + $scope.row.member_wechat_id +"&m=" + message).success(function() {
			alert("发送成功");
		});
	}
	
	$scope.sendMessage = function() {
		var message = $("message").value;
		$http.get(getHeadUrl() + "wechat_send.a?wcid=" + $scope.row.member_wechat_id +"&m=" + message).success(function() {
			alert("发送成功");
		});
	}
	
	$scope.modify = function() {
		var status = $("status").value;
		$http({
			method:'POST',
			url: getHeadUrl() + "cash_modify.a",
			data: "id=" + $scope.row.guid + "&status=" + status,
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		}).error(function(data,state){
            alert("信息过长");
		}); 
	}
	
});
	