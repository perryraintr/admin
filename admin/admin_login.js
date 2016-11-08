var app = angular.module("admin", []);
app.controller("admin_login", function($scope, $http) {
	
	$scope.loginMember = function() {
		var phone = document.getElementById("tel").value;
		var password = document.getElementById("password").value;
		
		$http.get(getHeadUrl() + "admin_login.a?method=login&phone=" + phone + "&password=" + password).success(function(response) {
			if (response.body.guid != undefined && response.body.guid > 0) {
				localStorage.setItem("admin_login", response.body.phone);
				location.href = "admin_raintr.html";
			} else {
				alert("账户或密码错误");
			}
		});	
	}
		
});