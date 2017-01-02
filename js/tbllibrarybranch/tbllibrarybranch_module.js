'use strict';

/* Module for TblLibraryBranch */

var tblLibraryBranchModule = angular.module('tblLibraryBranch.module', ['myApp']);

/**
 * Module for tblLibraryBranch
 */
tblLibraryBranchModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/tblLibraryBranch',    {templateUrl: 'partials/tbllibrarybranch/tbllibrarybranch_list.html', controller: 'TblLibraryBranchCtrl'});
    $routeProvider.when('/tblLibraryBranch/new', {templateUrl: 'partials/tbllibrarybranch/tbllibrarybranch_form.html', controller: 'TblLibraryBranchCtrl'});
    $routeProvider.when('/tblLibraryBranch/:branchid', {templateUrl: 'partials/tbllibrarybranch/tbllibrarybranch_form.html', controller: 'TblLibraryBranchCtrl'});
}]);
