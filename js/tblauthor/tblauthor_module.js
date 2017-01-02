'use strict';

/* Module for TblAuthor */

var tblAuthorModule = angular.module('tblAuthor.module', ['myApp']);

/**
 * Module for tblAuthor
 */
tblAuthorModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/tblAuthor',    {templateUrl: 'partials/tblauthor/tblauthor_list.html', controller: 'TblAuthorCtrl'});
    $routeProvider.when('/tblAuthor/new', {templateUrl: 'partials/tblauthor/tblauthor_form.html', controller: 'TblAuthorCtrl'});
    $routeProvider.when('/tblAuthor/:authorid', {templateUrl: 'partials/tblauthor/tblauthor_form.html', controller: 'TblAuthorCtrl'});
}]);
