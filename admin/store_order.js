var app = angular.module('admin', []);
app.controller('store_order', function($scope, $http) {
	var sid = GetQueryInt("sid");
	var page = GetQueryInt("page");
	var ceshi = GetQueryInt("ceshi");
	ceshi = 1;

	if(sid > 0) {
		$http.get(getHeadUrl() + "order.a?sid=" + sid + "&page=" + (page > 0 ? page : 1)).success(function(response) {
			if(ceshi == 1) {
				$scope.json = response.body.array;
			} else {
				$scope.json = [];
				for(var i = 0; i < response.body.array.length; i++) {
					$scope.order = response.body.array[i];
					if($scope.order.member_wechat_id == "o1D_JwHikK5LBt_Y__Ukr9p4tKsY" || $scope.order.member_wechat_id == "o1D_JwGKMNWZmBYLxghYYw0GIlUg" || $scope.order.member_wechat_id == "o1D_JwFbCrjU1rPJdO6-ljRQC5qE" || $scope.order.member_wechat_id == "o1D_JwGiLMukMtRIo6HU5M0ngxPs" || $scope.order.member_wechat_id == "o1D_JwGTL0ZN81hpxJSxflvtXQj8" || $scope.order.member_wechat_id == "o1D_JwGiLMukMtRIo6HU5M0ngxPs") {} else {
						$scope.json.push($scope.order);
					}
				}
			}

		});
	} else {
		$http.get(getHeadUrl() + "order.a?sid=all&page=" + (page > 0 ? page : 1)).success(function(response) {
			if(ceshi == 1) {
				$scope.json = response.body.array;
			} else {
				$scope.json = [];
				for(var i = 0; i < response.body.array.length; i++) {
					$scope.order = response.body.array[i];
					if($scope.order.member_wechat_id == "o1D_JwHikK5LBt_Y__Ukr9p4tKsY" || $scope.order.member_wechat_id == "o1D_JwGKMNWZmBYLxghYYw0GIlUg" || $scope.order.member_wechat_id == "o1D_JwFbCrjU1rPJdO6-ljRQC5qE" || $scope.order.member_wechat_id == "o1D_JwGiLMukMtRIo6HU5M0ngxPs" || $scope.order.member_wechat_id == "o1D_JwGTL0ZN81hpxJSxflvtXQj8" || $scope.order.member_wechat_id == "o1D_JwGiLMukMtRIo6HU5M0ngxPs") {} else {
						$scope.json.push($scope.order);
					}
				}
			}

		});
	}

	//	$scope.modify = function(index) {
	//		var id = $("guid" + index).value;
	//		var orderno = $("orderno" + index).value;
	//		var grind = $("grind" + index).value;
	//		var cost = $("cost" + index).value;
	//		var memo = $("memo" + index).value;
	//		var status = $("status" + index).value;
	//		$http({
	//			method: 'POST',
	//			url: "http://interface.pinshe.org/v1/order_modify.a",
	//			data: "id=" + id + "&orderno=" + orderno + "&grind=" + grind + "&cost=" + cost + "&memo=" + memo + "&status=" + status,
	//			headers: {
	//				'Content-Type': 'application/x-www-form-urlencoded'
	//			}
	//		}).error(function(data, state) {
	//			alert("信息过长");
	//		});
	//	}

	//	$scope.delete = function(id) {
	//		if(confirm("are you sure remove it")) {
	//			$http.get("http://interface.pinshe.org/v1/order_remove.a?id=" + id).success(function(response) {
	//				window.location.reload();
	//			});
	//		}
	//	}

});