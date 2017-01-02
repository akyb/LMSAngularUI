'use strict';

/* Module for TblBookLoans */

var tblBookLoansModule = angular.module('tblBookLoans.module', ['myApp']);

/**
 * Module for tblBookLoans
 */
tblBookLoansModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/tblBookLoans',    {templateUrl: 'partials/tblbookloans/tblbookloans_list.html', controller: 'TblBookLoansCtrl'});
    $routeProvider.when('/tblBookLoans/new', {templateUrl: 'partials/tblbookloans/tblbookloans_form.html', controller: 'TblBookLoansCtrl'});
    $routeProvider.when('/tblBookLoans/:bookid/:branchid/:cardno', {templateUrl: 'partials/tblbookloans/tblbookloans_form.html', controller: 'TblBookLoansCtrl'});
}]);
