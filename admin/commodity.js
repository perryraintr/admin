var app = angular.module('admin', []);
app.controller('commodity', function($scope, $http) {
	var page = GetQueryInt("page");
	
	if (!getCheckLogin()) {
		location.href = "admin_login.html";
	}
	
	$http.get(getHeadUrl() + "store.a?page=1").success(function(response) {
		$scope.storeList = response.body.array;
		$http.get(getHeadUrl() + "commodity.a?page=" + (page > 0 ? page : 1)).success(function(response) {
			$scope.json = response.body.array;
		});
	});
	
	$scope.modify = function(index){
		var id = $("guid" + index).value;
		var rank = $("rank" + index).value;
		var count = $("count" + index).value;
		var price = $("price" + index).value;
		var cost = $("cost" + index).value;
		var linkUrl = $("link" + index).value;
		var memo = $("memo" + index).value;

		$http({
			method:'POST',
			url: getHeadUrl() + "commodity_modify.a",
			data: "id=" + id + "&rank=" + rank + "&count=" + count + "&price=" + price + "&cost=" + cost + "&linkUrl=" + linkUrl + "&memo=" + memo,
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		}).error(function(data,state){
            alert("信息过长");
		}); 
	}
	
	$scope.delete = function(id){
	  	if(confirm("are you sure remove it")){
	   	 	$http.get(getHeadUrl() + "commodity_remove.a?id=" + id).success(function(response) {
				window.location.reload();
			});	
	   	}
	}
	
	$scope.syncClicked = function () {
		$http.get(getHeadUrl() + "commodity_add_yzs.a").success(function(response) {
			$scope.sync = "同步成功";
			window.location.reload();
		});	
	}
	
	$scope.qrcode = function(model) {
		$http.get(getHeadUrl() + "wechat_qrcode.a?cid=" + model.guid).success(
			function(response) {
				model.qrcodeUrl = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + response.ticket;
			}
		);
	}
	
});
	