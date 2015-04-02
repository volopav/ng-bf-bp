module.exports = ['instagram', function (instagram) {
    return {
        restrict: 'E',
        template: require('./template.html'),
        link: function (scope) {
            instagram.fetchByUserId(function (data) {
                scope.instagramPics = data;
            })
        }
    }
}];