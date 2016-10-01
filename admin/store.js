var app = angular.module('admin', []);
app.controller('store', function($scope, $http) {
	
	if (!getCheckLogin()) {
		location.href = "admin_login.html";
	}
	
	$http.get(getHeadUrl() + "commodity.a?page=1").success(function(response) {
		$scope.commodityList = response.body.array;
		
		$http.get(getHeadUrl() + "store.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
			function(response) {
				$scope.json = response.body.array;
			}
		);
	
	});	
	
	$scope.modify = function(index){
		var id = $("guid" + index).value;
		var mid = $("mid" + index).value;
		var name = $("name" + index).value;
		name = encodeURIComponent(name);
		var payment = $("payment" + index).value;
		var invaild = $("invaild" + index).value;
		var phone = $("phone" + index).value;
		var address = $("address" + index).value;
		var longitude = $("longitude" + index).value;
		var latitude = $("latitude" + index).value;
//		var rank = $("rank" + index).value;
		var dateStr = $("date" + index).value;
		var owner = $("owner" + index).value;
		var slogan = $("slogan" + index).value;
		var recommend = $("recommend" + index).value;
		var feature1 = $("feature1" + index).value;
		var feature2 = $("feature2" + index).value;
		var feature3 = $("feature3" + index).value;
		var star = $("star" + index).value;
		var activity = $("activity" + index).value;
		var commentStr = $("comment" + index).value;
		var description = $("description" + index).value;
		$http({
			method:'POST',
			url: getHeadUrl() + "store_modify.a",
			data: "id=" + id + "&mid=" + mid + "&name=" + name + "&payment=" + payment + "&invaild=" + invaild + "&phone=" + phone + "&address=" + address + "&longitude=" + longitude + "&latitude=" + latitude + "&date=" + dateStr + "&owner=" + owner + "&slogan=" + slogan + "&recommend=" + recommend + "&feature1=" + feature1 + "&feature2=" + feature2 + "&feature3=" + feature3 + "&star=" + star + "&activity=" + activity + "&comment=" + commentStr + "&description=" + description,
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		}).error(function(data,state){
            alert("信息过长");
		}); 
	}
	
	$scope.qrcode = function(model) {
		$http.get(getHeadUrl() + "wechat_qrcode.a?sid=" + model.guid).success(
			function(response) {
				model.qrcodeUrl = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + response.ticket;
			}
		);
		
	}
	
});