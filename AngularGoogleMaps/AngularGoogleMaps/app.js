angular.module("googleMapsViewer", []);

(function () {
    var controller = function ($scope, $http) {

        var onSearchResults = function (keyword) {
            var queryString = "https://XXXXmaps.googleapis.com/maps/api/geocode/json?address=";
            queryString += keyword;
            queryString += "&key=AIzaSyBdmUGD9D0ND9T_DPQ0nkJ2T-QKbp6SqKs";
            queryString += "&components=country:BE|postal_code:3000";
            $http.get(queryString).then(onResultsFound, onError);
        }

        var onResultsFound = function (response) {
            $scope.results = response.data.results;
        }

        var onError = function(error)
        {
            $("#dialog").dialog("open");
        }

        var onOrderBy = function (orderWord) {
            // by default always sort 
            if ($scope.orderStatement == orderWord)
            {
                $scope.reverseOrder = !$scope.reverseOrder;
            }
            else
            {
                $scope.reverseOrder = false;
            }

            $scope.orderStatement = orderWord;
        }

        $scope.searchLocation = onSearchResults;
        $scope.orderBy = onOrderBy;
        $scope.orderStatement = 'formatted_address';
        $scope.reverseOrder = false;
        $scope.keyword = "Delhaize";

        $("#dialog").dialog({
            autoOpen: false,
            show: {
                effect: "fade",
                duration: 1000
            },
            hide: {
                effect: "fade",
                duration: 200
            }
        });
    };

    var app = angular.module("googleMapsViewer");
    app.controller("resultBrowser", ["$scope", "$http", controller]);
})();