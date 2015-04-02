module.exports = ['$http', function ($http) {
    var endpoint = 'https://api.instagram.com/v1/users/1181133519/media/recent/?count=8&client_id=0c233bf8c27a42fe9a60bdf8b9779067&callback=JSON_CALLBACK';

    return  {
        fetchByUserId: function(callback) {
            $http.jsonp(endpoint).success(function (response) {
                callback(response.data);
            });
        }
    }
}];