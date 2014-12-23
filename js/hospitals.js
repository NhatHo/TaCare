var hospitalsList = new Firebase("https://tacare.firebaseio.com/BenhVien");

angular.module("hospitalsApp", ["firebase"])
.factory("hospitalList", ["$firebase", function($firebase) {
	return $firebase(hospitalsList);
}])
.controller("hospitalController", ["$scope", "hospitalList",
	function($scope, hospitals) {
		$scope.rating = 5;
		$scope.saveRatingToServer = function(rating) {
			$window.alert('Rating selected - ' + rating);
		};
		$scope.hospitals = hospitals;
		$scope.addComment = function(event){
			var reviewBoxId = "addReview_" + event.target.id;
			console.log("The comment box id is: " + reviewBoxId);
			document.getElementById(reviewBoxId).style.display = "block";
		}
		$scope.showComment = function(event){
			var reviewBoxId = "addReview_" + event.target.id;
			document.getElementById(reviewBoxId).style.display = "none";
		}
		$scope.sendAddReview = function(event){
			var reviewBoxId = "addReview_" + event.target.id;
			document.getElementById(reviewBoxId).style.display = "none";
		}
		$scope.cancelAddReview = function(event){
			var reviewBoxId = "addReview_" + event.target.id;
			document.getElementById(reviewBoxId).style.display = "none";
		}
	}
])
.directive('fundooRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                    '\u2605' +
                  '</li>' +
                '</ul>',
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function (scope, elem, attrs) {

        var updateStars = function() {
          scope.stars = [];
          for (var  i = 0; i < scope.max; i++) {
            scope.stars.push({filled: i < scope.ratingValue});
          }
        };

        scope.toggle = function(index) {
          if (scope.readonly && scope.readonly === 'true') {
            return;
          }
          scope.ratingValue = index + 1;
          scope.onRatingSelected({rating: index + 1});
        };

        scope.$watch('ratingValue', function(oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
        });
      }
    }
});
