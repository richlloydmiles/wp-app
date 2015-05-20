angular.module("helloworld", ['ngSanitize']).controller("HelloController", function($scope, $http ) {
	$scope.pages = [];
	$scope.cont = "";
	$http.get('http://www.richmiles.co.za/wp-json/pages/').success(function(data) {
		for (i = 0; i < data.length; i++) { 
			$scope.pages.push(data[i]);
		}
	});
	$scope.toggle = function(link) {
		$scope.cont = link;
	}
});
