(function () {
    var searchController = function ($scope, $location) {

        var searchLocation = function (keyword) {
            $location.path("/results/" + keyword);
        }

        $scope.keyword = "Delhaize";
        $scope.searchLocation = searchLocation;
    };

    var app = angular.module("googleMapsViewer");
    app.controller("searchController", ["$scope", "$location", searchController]);
})();