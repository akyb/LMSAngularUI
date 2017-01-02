'use strict';

/* Module for TblBorrower */

var tblBorrowerModule = angular.module('tblBorrower.module', ['myApp']);

/**
 * Module for tblBorrower
 */
tblBorrowerModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/tblBorrower',    {templateUrl: 'partials/tblborrower/tblborrower_list.html', controller: 'TblBorrowerCtrl'});
    $routeProvider.when('/tblBorrower/new', {templateUrl: 'partials/tblborrower/tblborrower_form.html', controller: 'TblBorrowerCtrl'});
    $routeProvider.when('/tblBorrower/:cardno', {templateUrl: 'partials/tblborrower/tblborrower_form.html', controller: 'TblBorrowerCtrl'});
}]);
