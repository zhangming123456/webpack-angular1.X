"use strict";
var appHome = angular.module('appHomeController', []);
appHome.controller('appHome', function ($scope) {
    $scope.text = 12;
});

module.exports = 'appHomeController';