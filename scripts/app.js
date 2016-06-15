/*
function twitterController($scope, $http) {
	var ENDPOINT = "data/request.php";
	//$scope.data.statuses.text = []
	$http.get(ENDPOINT).then(function(response) {
		console.log(response)
		});
};
*/


function profilesController($scope, $http) {
	var ENDPOINT = "data/profiles.json";
	$scope.profiles = [];
	$http.get(ENDPOINT).then(function(response) {
		$scope.profiles = response.data
	});
}

function navDirective() {
	return {
		restrict:"E",
		templateUrl:"./views/nav.html"
	};
}

function profilesDirective() {
	return {
		restrict:"E",
		templateUrl:"./views/profile.html"
	};
}


(function(){
	var myApp = angular.module("myApp", []);
	myApp.directive('profilesDirective', profilesDirective)
	myApp.directive('navDirective', navDirective)
	myApp.controller("profilesController", ["$scope", "$http", profilesController])
	//myApp.controller("twitterController", ["$scope", "$http", twitterController])
})();
