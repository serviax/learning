(function () {
    var app = angular.module("googleMapsViewer", ["ngRoute"]);
    app.config
    (["$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/results/:location",
                {
                    templateUrl: "results.html",
                    controller: "resultController"
                })
            .when("/search",
                {
                    templateUrl: "searchGeoResults.html",
                    controller: "searchController"
                })
            .when("/error",
                {
                    templateUrl: "error.html"
                })
            .otherwise({ redirectTo: "/search" });
    }
    ]);
})();