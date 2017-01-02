'use strict';

/* Module for TblBook */

var tblBookModule = angular.module('tblBook.module', ['myApp']);

/**
 * Module for tblBook
 */
tblBookModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/tblBook',    {templateUrl: 'partials/tblbook/tblbook_list.html', controller: 'TblBookCtrl'});
    $routeProvider.when('/tblBook/new', {templateUrl: 'partials/tblbook/tblbook_form.html', controller: 'TblBookCtrl'});
    $routeProvider.when('/tblBook/:bookid', {templateUrl: 'partials/tblbook/tblbook_form.html', controller: 'TblBookCtrl'});
}]);
