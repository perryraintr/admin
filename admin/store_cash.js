var app = angular.module('admin', []);
app.controller('store_cash', function($scope, $http) {
	var sid = GetQueryInt("sid");
	var page = GetQueryInt("page");
	var ceshi = GetQueryInt("ceshi");
	
	if(sid > 0){
		$http.get(getHeadUrl() + "cash.a?sid=" + sid + "&page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
//			if (ceshi == 1) {
//				
//			} else {
//				$scope.json = [];
//				for (var i = 0; i< response.body.array.length; i++) {
//					$scope.cash = response.body.array[i];
//					if ($scope.cash.member_wechat_id == "o1D_JwHikK5LBt_Y__Ukr9p4tKsY" || $scope.order.member_wechat_id == "o1D_JwGKMNWZmBYLxghYYw0GIlUg" || $scope.order.member_wechat_id == "o1D_JwFbCrjU1rPJdO6-ljRQC5qE" || $scope.order.member_wechat_id == "o1D_JwGiLMukMtRIo6HU5M0ngxPs" || $scope.order.member_wechat_id == "o1D_JwGTL0ZN81hpxJSxflvtXQj8" || $scope.order.member_wechat_id == "o1D_JwGiLMukMtRIo6HU5M0ngxPs") {
//					} else {
//						$scope.json.push($scope.cash);
//					}
//				}
//			}
		});
	} else {
		$http.get(getHeadUrl() + "cash.a?page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
//			if (ceshi == 1) {
//			} else {
//				$scope.json = [];
//				for (var i = 0; i< response.body.array.length; i++) {
//					$scope.cash = response.body.array[i];
//					if ($scope.cash.member_wechat_id == "o1D_JwHikK5LBt_Y__Ukr9p4tKsY" || $scope.order.member_wechat_id == "o1D_JwGKMNWZmBYLxghYYw0GIlUg" || $scope.order.member_wechat_id == "o1D_JwFbCrjU1rPJdO6-ljRQC5qE" || $scope.order.member_wechat_id == "o1D_JwGiLMukMtRIo6HU5M0ngxPs" || $scope.order.member_wechat_id == "o1D_JwGTL0ZN81hpxJSxflvtXQj8" || $scope.order.member_wechat_id == "o1D_JwGiLMukMtRIo6HU5M0ngxPs") {
//					} else {
//						$scope.json.push($scope.cash);
//					}
//				}
//			}
			
		});
	}
	
	$scope.modify = function(index){
		var id = $("guid" + index).value;
		var status = $("status" + index).value;
		$http({
			method:'POST',
			url: getHeadUrl() + "cash_modify.a",
			data: "id=" + id + "&status=" + status,
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		}).error(function(data,state){
            alert("信息过长");
		}); 
	}
	
	$scope.delete = function(id){
	  	if(confirm("are you sure remove it")){
	    	$http.get(getHeadUrl() + "cash_remove.a?id=" + id).success(function(response) {
				window.location.reload();
			});	
	   }
	}
	
	$scope.sendMessage = function(model, index) {
		var message = $("message" + index).value;
		$http.get(getHeadUrl() + "wechat_send.a?wcid=" + model.member_wechat_id +"&m=" + message).success(function() {
			alert("发送成功");
		});
	}
	
});
	