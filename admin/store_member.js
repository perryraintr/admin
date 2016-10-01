var app = angular.module('admin', []);
app.controller('store_member', function($scope, $http) {
	var sid = GetQueryInt("sid");
	
	if(sid > 0){
		$http.get(getHeadUrl() + "store_member.a?sid=" + sid).success(function(response) {
			$scope.json = response.body.array;
		});
	}
	
	$scope.delete = function(id){
	  	if(confirm("are you sure remove it")){
	    	$http.get(getHeadUrl() + "store_member_remove.a?id=" + id).success(function(response) {
				window.location.reload();
			});	
	   }
	}
	
});
	