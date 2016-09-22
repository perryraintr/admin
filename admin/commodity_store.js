var app = angular.module('admin', []);
app.controller('commodity_store', function($scope, $http) {
	$scope.id = GetQueryInt("id");
//	$scope.id = 121;

	$http.get(getHeadUrl() + "commodity.a?id=" + $scope.id).success(function(response) {
		$scope.commodity = response.body;

		$http.get(getHeadUrl() + "store.a?page=1").success(function(response) {
			$scope.storeList = response.body.array;
		});
	});

	$scope.AddRecommend = function() {
		$scope.commodity.recommends.push("");
	}

	$scope.modifyRecommend = function(model, i) {
		var obj = document.getElementById("selectedId" + i);
		var index = obj.selectedIndex; //序号，取当前选中选项的序号
		var val = obj.options[index].text;
		var sid = obj.options[index].id;
		var m = document.getElementById("m" + i).value;
		if (m.length == 0) {
			alert("请写推荐理由");
		}
		$http.get(getHeadUrl() + "recommend_modify.a?id=" + model.guid + "&cid=" + $scope.commodity.guid + "&sid=" + sid + "&m=" + m).success(function(response) {
			alert("修改成功");
		});
	}

	$scope.RemoveRecommend = function(model, i) {
		var obj = document.getElementById("selectedId" + i);
		var index = obj.selectedIndex; //序号，取当前选中选项的序号
		var val = obj.options[index].text;
		var sid = obj.options[index].id;
		var m = document.getElementById("m" + i).value;
		$http.get(getHeadUrl() + "recommend_remove.a?id=" + model.guid).success(function(response) {
			window.location.reload();
		});
	}

	$scope.saveRecommend = function(model, i) {
		var obj = document.getElementById("selectedId" + i);
		var index = obj.selectedIndex; //序号，取当前选中选项的序号
		var val = obj.options[index].text;
		var sid = obj.options[index].id;
		var m = document.getElementById("m" + i).value;
		if (m.length == 0) {
			alert("请写推荐理由");
		}
		$http.get(getHeadUrl() + "recommend_add.a?sid=" + sid + "&cid=" +$scope.commodity.guid + "&m=" + m).success(function(response) {
			alert("添加成功");
		});

	}

});