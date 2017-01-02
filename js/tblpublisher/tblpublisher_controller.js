'use strict';

/**
 * Controller for TblPublisher
 **/
tblPublisherModule.controller('TblPublisherCtrl', ['TblPublisher',  '$scope', '$routeParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(TblPublisher, $scope, $routeParams, $http, $location, $cookies, MessageHandler, restURL) {
	    // edition mode
    $scope.mode = null;
    
	// list of tblPublishers
    $scope.tblPublishers = [];
	// tblPublisher to edit
    $scope.tblPublisher = null;

	// referencies entities
	$scope.items = {};

    /**
     * Load all referencies entities
     */
	$scope.loadAllReferencies = function() {
    };
    
    /**
     * Refresh tblPublishers list
     */
    $scope.refreshTblPublisherList = function() {
    	try {
			$scope.tblPublishers = [];
        	TblPublisher.getAll().then(
				function(success) {
        	        $scope.tblPublishers = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh tblPublisher
     */
    $scope.refreshTblPublisher = function(publisherid) {
    	try {
        	$scope.tblPublisher = null;
	        TblPublisher.get(publisherid).then(
				function(success) {
        	        $scope.tblPublisher = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the tblPublishers list page
     */
    $scope.goToTblPublisherList = function() {
        $scope.refreshTblPublisherList();
        $location.path('/tblPublisher');
    }
    /**
     * Go to the tblPublisher edit page
     */
    $scope.goToTblPublisher = function(publisherid) {
        $scope.refreshTblPublisher(publisherid);
        $location.path('/tblPublisher/'+publisherid);
    }

    // Actions

    /**
     * Save tblPublisher
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = TblPublisher.create;
			} else {
				save = TblPublisher.update;
			}
			save($scope.tblPublisher).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.tblPublisher = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete tblPublisher
     */
    $scope.delete = function(publisherid) {
	    try {
			MessageHandler.cleanMessage();
    	    TblPublisher.delete(publisherid).then(
				function(success) {
                	$scope.goToTblPublisherList();
            	}, 
                MessageHandler.manageError);
        } catch(ex) {
            MessageHandler.manageException(ex);
        }
    };
    
    // Main
	MessageHandler.cleanMessage();
    if( $location.path().endsWith('/new') ) {
        // Creation page
        $scope.tblPublisher = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $routeParams.publisherid != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshTblPublisher($routeParams.publisherid);
    } else {
        // List page
        $scope.refreshTblPublisherList();
    }
    
    
}]);
