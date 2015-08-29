(function () {
    var controller = function ($scope, $http, $log, $interval, $animate, $routeProvider, geocoder) {

        var onSearchResults = function (keyword) {
            $log.info("getting info on keyword " + keyword);
            geocoder.getLocations(keyword).then(onResultsFound, OnError);
        }

        var onResultsFound = function (response) {
            $log.info("response received");
            $scope.results = response.results;
        }

        var OnError = function (response) {
            $scope.error = true;
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

        var OnTicker = function () {
            $scope.secondsOnPage++;
        }

        $routeProvider.when(
            "/results",
            {
                templateUrl: "geoResults.html",
                controller: "geoController"
            }
            );

        $scope.searchLocation = onSearchResults;
        $scope.orderBy = onOrderBy;
        $scope.orderStatement = 'formatted_address';
        $scope.reverseOrder = false;
        $scope.keyword = "Delhaize";
        $scope.secondsOnPage = 0;
        $interval(OnTicker, 1000);
    };

    var app = angular.module("googleMapsViewer", ["ngAnimate", "ngRoute"]);
    app.controller("resultBrowser", ["$scope", "$http", "$log", "$interval", "$animate", "$routeProvider", "geocoder", controller]);

    app.config
    (
    function ($routeProvider) {
        $routeProvider.when("/results", 
            {
                templateUrl: "geoResults.html",
                controller : 
            })
    }
    );



    //app.animation('.results', function () {
    //    return {
    //        beforeAddClass: function (element, className, done) {
    //            if (className == 'ng-hide') {
    //                $(element).animate({
    //                    opacity: 0
    //                }, 1500);
    //            }
    //            else {
    //                done();
    //            }
    //        },
    //        removeClass: function (element, className, done) {
    //            if (className == 'ng-hide') {
    //                element.css('opacity', 0);
    //                $(element).animate({
    //                    opacity: 1
    //                }, 5000);
    //            } else {
    //                done();
    //            }
    //        }
    //    }
    //});


})();