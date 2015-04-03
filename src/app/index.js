var angular = require('angular');

var app = angular.module('BrfyApp', [
    require('modules/header').name,
    require('angular-ui-router'), // angular-ui router exports not AngularJS module object,
                                  // but just module name – a string.
    require('modules/home').name,
    require('modules/InstagramFeed').name
])

.config( require('./router.config') )

.directive('app', function () {
    return {
        restrict: 'AE',
        template: require('./app.html')
    }
});

module.exports = app;