(function () {
    var voteController = function ($scope, $http, $log) {

        var fetchTime = function () {
            var querystring = "/vote/current-time";
            $http.get(querystring).then(function (response) {
                $scope.currentTime = response.data;
            })
        }

        var getOptions = function () {
            var queryString = "/vote/get-options";
            $http.get(queryString).then(function (response) {
                $log.info("retrieved vote options with data ");
                $log.info(response.data.ResourceList);
                $scope.voteOptions = response.data.ResourceList;
            })
        }

        var saveOption = function (selectedOption, comment) {
            $log.info("Now calling webservice with Option " + selectedOption + "::" + comment);
            $log.info($scope);
        }

        var callServer = function ()
        {
            $log.info("Calling server");
        }

        // Initialization code
        fetchTime();
        getOptions();
        $scope.saveOption = saveOption;

        return {
            FetchTime: fetchTime,
            saveOption: saveOption,
            callServer : callServer
        }
    }

    var app = angular.module("DeepHouseBelgiumApp");
    app.controller("voteController", ["$scope", "$http", "$log", voteController]);
})();