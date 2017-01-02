'use strict';

/* Module for TblPublisher */

var tblPublisherModule = angular.module('tblPublisher.module', ['myApp']);

/**
 * Module for tblPublisher
 */
tblPublisherModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/tblPublisher',    {templateUrl: 'partials/tblpublisher/tblpublisher_list.html', controller: 'TblPublisherCtrl'});
    $routeProvider.when('/tblPublisher/new', {templateUrl: 'partials/tblpublisher/tblpublisher_form.html', controller: 'TblPublisherCtrl'});
    $routeProvider.when('/tblPublisher/:publisherid', {templateUrl: 'partials/tblpublisher/tblpublisher_form.html', controller: 'TblPublisherCtrl'});
}]);
