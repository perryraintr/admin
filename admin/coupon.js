var app = angular.module('admin', []);
app.controller('coupon', function($scope, $http) {
	var page = GetQueryInt("page");

	$http.get(getHeadUrl() + "coupon.a?page=" + (page > 0 ? page : 1)).success(function(response) {
		$scope.json = response.body.array;
	});

	$scope.modify = function(index){
//		var id = $("id" + index).value;
//		var orderno = $("orderno" + index).value;
//		var mid = $("mid" + index).value;
//		var nid = $("nid" + index).value;
//		var oid = $("oid" + index).value;
//		var count = $("count" + index).value;
//		var purl = $("purl" + index).value;
//		var porderno = $("porderno" + index).value;
//		var grind = $("grind" + index).value;
//		var cost = $("cost" + index).value;
//		var buyer = $("buyer" + index).value;
//		var memo = $("memo" + index).value;
//		
//		$http({
//			method:'POST',
//			url: "http://interface.pinshe.org/v1/order_modify.a",
//			data: "id=" + id + "&orderno=" + orderno + "&mid=" + mid + "&nid=" + nid + "&oid=" + oid + "&count=" + count + "&purl=" + purl + "&porderno=" + porderno + "&grind=" + grind + "&cost=" + cost + "&buyer=" + buyer + "&memo=" + memo,
//			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
//		}).error(function(data,state){
//          alert("信息过长");
//		}); 
	}
	
	$scope.delete = function(id){
//	  	if(confirm("are you sure remove it")){
//	    	$http.get("http://interface.pinshe.org/v1/order_remove.a?id=" + id).success(function(response) {
//				window.location.reload();
//			});	
//	   }
	}
});
	