(function () {
    var controller = function ($scope, $routeParams, $location, geocoder) {

        var onResultsFound = function (response) {
            $scope.results = response.results;
        }

        var OnError = function (response) {
            $location.path("/error");
        }

        var onOrderBy = function (orderWord) {
            // by default always sort 
            if ($scope.orderStatement == orderWord) {
                $scope.reverseOrder = !$scope.reverseOrder;
            }
            else {
                $scope.reverseOrder = false;
            }

            $scope.orderStatement = orderWord;
        }

        geocoder.getLocations($routeParams.location).then(onResultsFound, OnError);
        $scope.orderBy = onOrderBy;
        $scope.orderStatement = 'formatted_address';
        $scope.reverseOrder = false;
    };

    var app = angular.module("googleMapsViewer");
    app.controller("resultController", ["$scope", "$routeParams", "$location", "geocoder", controller]);
})();