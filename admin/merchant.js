var app = angular.module('admin', []);
app.controller('merchant', function($scope, $http) {
	
//	if (!getCheckLogin()) {
//		location.href = "admin_login.html";
//	}
	
	$http.get(getHeadUrl() + "merchant.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
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
	
	$scope.searchTelClicked = function() {
		var tel = document.getElementById("tel").value;
		if (tel.length == 0) {
			$http.get(getHeadUrl() + "merchant.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
				function(response) {
					$scope.json = response.body.array;
				}
			);
		} else {
			$http.get(getHeadUrl() + "merchant.a?phone=" + tel).success(function(response) {
				$scope.json = [];
				$scope.json.push(response.body);
			});	
		}
		
	}
	
	$scope.searchNameClicked = function () {
		var name = document.getElementById("name").value;
		if (name.length == 0) {
			$http.get(getHeadUrl() + "merchant.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
				function(response) {
					$scope.json = response.body.array;
				}
			);
		} else {
			$http.get(getHeadUrl() + "merchant.a?name=" + name).success(function(response) {
				$scope.json = [];
				$scope.json.push(response.body);
			});	
		}
	}
	
});