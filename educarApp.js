'use strict';

angular.module("educarApp", [
    'alunos',
    'ui.router'
]);

angular.module('educarApp')
.config(function($locationProvider) {
    $locationProvider.hashPrefix('');
});