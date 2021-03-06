var app = angular.module('admin', []);
app.controller('store_commodity', function($scope, $http) {
	$scope.id = GetQueryInt("id");
//	$scope.id = 62;

	$http.get(getHeadUrl() + "store.a?id=" + $scope.id).success(function(response) {
		$scope.store = response.body;

		$http.get(getHeadUrl() + "commodity.a?page=1").success(function(response) {
			$scope.commodityList = response.body.array;
		});
	});

	$scope.AddRecommend = function() {
		$scope.store.recommends.push("");
	}

	$scope.modifyRecommend = function(model, i) {
		var obj = document.getElementById("selectedId" + i);
		var index = obj.selectedIndex; //序号，取当前选中选项的序号
		var val = obj.options[index].text;
		var cid = obj.options[index].id;
		var m = document.getElementById("m" + i).value;
		if (m.length == 0) {
			alert("请写推荐理由");
		}
		$http.get(getHeadUrl() + "recommend_modify.a?id=" + model.guid + "&cid=" + cid + "&sid=" + $scope.store.guid + "&m=" + m).success(function(response) {
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
		var cid = obj.options[index].id;
		var m = document.getElementById("m" + i).value;
		if (m.length == 0) {
			alert("请写推荐理由");
		}
		$http.get(getHeadUrl() + "recommend_add.a?sid=" + $scope.store.guid + "&cid=" + cid + "&m=" + m).success(function(response) {
			alert("添加成功");
		});

	}

});