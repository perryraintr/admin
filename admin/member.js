var app = angular.module('admin', []);
app.controller('member', function($scope, $http) {
	
	if (!getCheckLogin()) {
		location.href = "admin_login.html";
	}
	
	$http.get(getHeadUrl() + "member.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
		function(response) {
			$scope.json = response.body.array;
		}
	);
	
	$scope.sendMessage = function(model, index) {
		var message = $("message" + index).value;
		$http.get(getHeadUrl() + "wechat_send.a?wcid=" + model.wechat_id +"&m=" + message).success(function() {
			alert("发送成功");
		});
	}
	
	$scope.searchClicked = function() {
		var tel = document.getElementById("tel").value;
		if (tel.length == 0) {
			$http.get(getHeadUrl() + "member.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
				function(response) {
					$scope.json = response.body.array;
				}
			);
		} else {
			$http.get(getHeadUrl() + "member.a?phone=" + tel).success(function(response) {
				$scope.json = [];
				$scope.json.push(response.body);
			});	
		}
		
	}
	
});