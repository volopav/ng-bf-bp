module.exports = require('angular').module('home', [])

.directive('home', function () {
    return {
        restrict: 'E',
        template: 'This is home screen'
    }
});
