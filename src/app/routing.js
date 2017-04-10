'use strict';
import homeCtrl from '../components/home/home.html';
import mainCtrl from '../components/main/main.html';
angular.module('app.routing', [])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'homeCtrl',
                template: homeCtrl
            })
            .state('main', {
                url: '/main',
                controller: 'mainCtrl',
                template: mainCtrl,
            });
        $urlRouterProvider
            .when('/home', '/home/1')
            .otherwise('home');

        // $locationProvider.html5Mode(true);
    }]);
module.exports = 'app.routing';