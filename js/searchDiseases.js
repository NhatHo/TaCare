var diseases = new Firebase("https://tacare.firebaseio.com/Benh");

angular.module("diseasesSearchEngine", ["firebase"])
.factory("diseasesList", ["$firebase", function($firebase) {
	return $firebase(diseases);
}])
.controller("diseasesController", ["$scope", "diseasesList",
	function($scope, diseases) {
		$scope.diseases = diseases;
		$scope.showContent = function(event){
			var diseaseId = "disease_" + event.target.id;
			if(document.getElementById(diseaseId).style.display == "none") {
				document.getElementById(diseaseId).style.display = "block";
			} else {
				document.getElementById(diseaseId).style.display = "none";
			}
		}
	}
]);