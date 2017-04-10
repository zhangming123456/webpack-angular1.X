"use strict";
angular.module('app.controllers', [
    require('../components/home/home.js'),
    require('../components/main/main.js'),
])
    .controller('appCtrl', ["$scope", function ($scope) {

    }]);
module.exports = 'app.controllers';
