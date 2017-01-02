'use strict';

/**
 * Controller for TblLibraryBranch
 **/
tblLibraryBranchModule.controller('TblLibraryBranchCtrl', ['TblLibraryBranch',  '$scope', '$routeParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(TblLibraryBranch, $scope, $routeParams, $http, $location, $cookies, MessageHandler, restURL) {
	    // edition mode
    $scope.mode = null;
    
	// list of tblLibraryBranchs
    $scope.tblLibraryBranchs = [];
	// tblLibraryBranch to edit
    $scope.tblLibraryBranch = null;

	// referencies entities
	$scope.items = {};

    /**
     * Load all referencies entities
     */
	$scope.loadAllReferencies = function() {
    };
    
    /**
     * Refresh tblLibraryBranchs list
     */
    $scope.refreshTblLibraryBranchList = function() {
    	try {
			$scope.tblLibraryBranchs = [];
        	TblLibraryBranch.getAll().then(
				function(success) {
        	        $scope.tblLibraryBranchs = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh tblLibraryBranch
     */
    $scope.refreshTblLibraryBranch = function(branchid) {
    	try {
        	$scope.tblLibraryBranch = null;
	        TblLibraryBranch.get(branchid).then(
				function(success) {
        	        $scope.tblLibraryBranch = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the tblLibraryBranchs list page
     */
    $scope.goToTblLibraryBranchList = function() {
        $scope.refreshTblLibraryBranchList();
        $location.path('/tblLibraryBranch');
    }
    /**
     * Go to the tblLibraryBranch edit page
     */
    $scope.goToTblLibraryBranch = function(branchid) {
        $scope.refreshTblLibraryBranch(branchid);
        $location.path('/tblLibraryBranch/'+branchid);
    }

    // Actions

    /**
     * Save tblLibraryBranch
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = TblLibraryBranch.create;
			} else {
				save = TblLibraryBranch.update;
			}
			save($scope.tblLibraryBranch).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.tblLibraryBranch = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete tblLibraryBranch
     */
    $scope.delete = function(branchid) {
	    try {
			MessageHandler.cleanMessage();
    	    TblLibraryBranch.delete(branchid).then(
				function(success) {
                	$scope.goToTblLibraryBranchList();
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
        $scope.tblLibraryBranch = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $routeParams.branchid != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshTblLibraryBranch($routeParams.branchid);
    } else {
        // List page
        $scope.refreshTblLibraryBranchList();
    }
    
    
}]);
