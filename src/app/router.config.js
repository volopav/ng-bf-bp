module.exports = [
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home>Home</home>'
            })
            .state('instagram', {
                url: '/instagram',
                template: '<instagram-feed>Instagram Feed</instagram-feed>'
            });
    }
];