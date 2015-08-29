(function () {
    var geocoder = function ($http) {
        var getLocations = function (keyword) {
            var queryString = "https://maps.googleapis.com/maps/api/geocode/json?address=";
            queryString += keyword;
            queryString += "&key=AIzaSyBdmUGD9D0ND9T_DPQ0nkJ2T-QKbp6SqKs";
            queryString += "&components=country:BE|postal_code:3000";

            return $http.get(queryString).then(function (response) {
                return response.data;
            }
            );
        }

        return {
            getLocations: getLocations
        };
    };

    var app = angular.module("googleMapsViewer");
    app.factory("geocoder", geocoder);
})();