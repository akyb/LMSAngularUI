'use strict';

/* Module for TblBookCopies */

var tblBookCopiesModule = angular.module('tblBookCopies.module', ['myApp']);

/**
 * Module for tblBookCopies
 */
tblBookCopiesModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/tblBookCopies',    {templateUrl: 'partials/tblbookcopies/tblbookcopies_list.html', controller: 'TblBookCopiesCtrl'});
    $routeProvider.when('/tblBookCopies/new', {templateUrl: 'partials/tblbookcopies/tblbookcopies_form.html', controller: 'TblBookCopiesCtrl'});
    $routeProvider.when('/tblBookCopies/:bookid/:branchid', {templateUrl: 'partials/tblbookcopies/tblbookcopies_form.html', controller: 'TblBookCopiesCtrl'});
}]);
