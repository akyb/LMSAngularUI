'use strict';

/**
 * Controller for TblBorrower
 **/
tblBorrowerModule.controller('TblBorrowerCtrl', ['TblBorrower',  '$scope', '$routeParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(TblBorrower, $scope, $routeParams, $http, $location, $cookies, MessageHandler, restURL) {
	    // edition mode
    $scope.mode = null;
    
	// list of tblBorrowers
    $scope.tblBorrowers = [];
	// tblBorrower to edit
    $scope.tblBorrower = null;

	// referencies entities
	$scope.items = {};

    /**
     * Load all referencies entities
     */
	$scope.loadAllReferencies = function() {
    };
    
    /**
     * Refresh tblBorrowers list
     */
    $scope.refreshTblBorrowerList = function() {
    	try {
			$scope.tblBorrowers = [];
        	TblBorrower.getAll().then(
				function(success) {
        	        $scope.tblBorrowers = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh tblBorrower
     */
    $scope.refreshTblBorrower = function(cardno) {
    	try {
        	$scope.tblBorrower = null;
	        TblBorrower.get(cardno).then(
				function(success) {
        	        $scope.tblBorrower = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the tblBorrowers list page
     */
    $scope.goToTblBorrowerList = function() {
        $scope.refreshTblBorrowerList();
        $location.path('/tblBorrower');
    }
    /**
     * Go to the tblBorrower edit page
     */
    $scope.goToTblBorrower = function(cardno) {
        $scope.refreshTblBorrower(cardno);
        $location.path('/tblBorrower/'+cardno);
    }

    // Actions

    /**
     * Save tblBorrower
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = TblBorrower.create;
			} else {
				save = TblBorrower.update;
			}
			save($scope.tblBorrower).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.tblBorrower = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete tblBorrower
     */
    $scope.delete = function(cardno) {
	    try {
			MessageHandler.cleanMessage();
    	    TblBorrower.delete(cardno).then(
				function(success) {
                	$scope.goToTblBorrowerList();
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
        $scope.tblBorrower = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $routeParams.cardno != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshTblBorrower($routeParams.cardno);
    } else {
        // List page
        $scope.refreshTblBorrowerList();
    }
    
    
}]);
