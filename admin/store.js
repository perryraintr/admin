var app = angular.module('admin', []);
app.controller('store', function($scope, $http) {
	if(!getCheckLogin()) {
		location.href = "admin_login.html";
	}
	$scope.json = [];
	$http.get(getHeadUrl() + "commodity.a?page=1").success(function(response) {
		$scope.commodityList = response.body.array;
		$http.get(getHeadUrl() + "store.a?page=" + (GetQueryInt("page") == 0 ? 1 : GetQueryInt("page"))).success(
			function(response) {
				for(var i = 0; i < response.body.array.length; i++) {
					$scope.model = response.body.array[i];
					$scope.model.feature1str = "";
					for(var j = 0; j < $scope.model.feature1s.length; j++) {
						$scope.model.feature1str += ($scope.model.feature1s[j].guid + ",");
					}
					$scope.model.feature2str = "";
					for(var j = 0; j < $scope.model.feature2s.length; j++) {
						$scope.model.feature2str += ($scope.model.feature2s[j].guid + ",");
					}
					$scope.json.push($scope.model);
				}
			}
		);

	});

	$scope.modify = function(index) {
		var id = document.getElementById("guid" + index).value;
		var mid = document.getElementById("mid" + index).value;
		var current = document.getElementById("current" + index).value;
		var name = document.getElementById("name" + index).value;
		name = encodeURIComponent(name);
		var payment = document.getElementById("payment" + index).value;
		var invaild = document.getElementById("invaild" + index).value;
		var is_delete = document.getElementById("delete" + index).value;
		var phone = document.getElementById("phone" + index).value;
		var address = document.getElementById("address" + index).value;
		address = encodeURIComponent(address);
		var longitude = document.getElementById("longitude" + index).value;
		var latitude = document.getElementById("latitude" + index).value;
		var wifi = document.getElementById("wifi" + index).value;
		var wifipassword = document.getElementById("wifipassword" + index).value;
		var dateStr = document.getElementById("date" + index).value;
		var owner = document.getElementById("owner" + index).value;
		var slogan = document.getElementById("slogan" + index).value;
		var recommend = document.getElementById("recommend" + index).value;
		var feature1 = document.getElementById("feature1s" + index).value;
		console.log(feature1);
		var feature2 = document.getElementById("feature2s" + index).value;
		var feature3 = document.getElementById("feature3" + index).value;
		var star = document.getElementById("star" + index).value;
		var activity = document.getElementById("activity" + index).value;
		var commentStr = document.getElementById("comment" + index).value;
		var description = document.getElementById("description" + index).value;
		$http({
			method: 'POST',
			url: getHeadUrl() + "store_modify.a",
			data: "id=" + id + "&mid=" + mid + "&current=" + current + "&name=" + name + "&payment=" + payment + "&invaild=" + invaild + "&is_delete=" + is_delete + "&phone=" + phone + "&address=" + address + "&longitude=" + longitude + "&latitude=" + latitude + "&wifi=" + wifi + "&wifi_password=" + wifipassword + "&date=" + dateStr + "&owner=" + owner + "&slogan=" + slogan + "&recommend=" + recommend + "&feature1s=" + feature1 + "&feature2s=" + feature2 + "&feature3=" + feature3 + "&star=" + star + "&activity=" + activity + "&comment=" + commentStr + "&description=" + description,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).success(function(response) {
			alert("修改成功");
		}).error(function(data, state) {
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

	$scope.addFeature1 = function(index, model) {
		var list = document.getElementById("feature1Id" + index).getElementsByTagName("input");
		var featureString = "";
		for(var i = 0; i < list.length; i++) {
			if(list[i].checked) {
				console.log(list[i].value);
				featureString += (list[i].value + ",")
			}
		}

		$http.get(getHeadUrl() + "store_feature1_add.a?sid=" + model.guid + "&feature1s=" + featureString).success(function(response) {
			alert("修改成功");
		});
	}

	$scope.addFeature2 = function(index, model) {
		var list = document.getElementById("feature2Id" + index).getElementsByTagName("input");
		var featureString = "";
		for(var i = 0; i < list.length; i++) {
			if(list[i].checked) {
				console.log(list[i].value);
				featureString += (list[i].value + ",")
			}
		}

		$http.get(getHeadUrl() + "store_feature2_add.a?sid=" + model.guid + "&feature1s=" + featureString).success(function(response) {
			alert("修改成功");
		});
	}

});