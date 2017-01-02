'use strict';

/**
 * Controller for TblBookCopies
 **/
tblBookCopiesModule.controller('TblBookCopiesCtrl', ['TblBookCopies',  'TblBook', 'TblLibraryBranch', '$scope', '$routeParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(TblBookCopies, TblBook, TblLibraryBranch, $scope, $routeParams, $http, $location, $cookies, MessageHandler, restURL) {
	 'TblBook',  'TblLibraryBranch',     // edition mode
    $scope.mode = null;
    
	// list of tblBookCopiess
    $scope.tblBookCopiess = [];
	// tblBookCopies to edit
    $scope.tblBookCopies = null;

	// referencies entities
	$scope.items = {};
    // tblBooks
	$scope.items.tblBooks = [];
    // tblLibraryBranchs
	$scope.items.tblLibraryBranchs = [];

    /**
     * Load all referencies entities
     */
	$scope.loadAllReferencies = function() {
		TblBook.getAllAsListItems().then(
				function(success) {
        	        $scope.items.tblBooks = success.data;
            	}, 
	            MessageHandler.manageError);
		TblLibraryBranch.getAllAsListItems().then(
				function(success) {
        	        $scope.items.tblLibraryBranchs = success.data;
            	}, 
	            MessageHandler.manageError);
    };
    
    /**
     * Refresh tblBookCopiess list
     */
    $scope.refreshTblBookCopiesList = function() {
    	try {
			$scope.tblBookCopiess = [];
        	TblBookCopies.getAll().then(
				function(success) {
        	        $scope.tblBookCopiess = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh tblBookCopies
     */
    $scope.refreshTblBookCopies = function(bookid, branchid) {
    	try {
        	$scope.tblBookCopies = null;
	        TblBookCopies.get(bookid, branchid).then(
				function(success) {
        	        $scope.tblBookCopies = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the tblBookCopiess list page
     */
    $scope.goToTblBookCopiesList = function() {
        $scope.refreshTblBookCopiesList();
        $location.path('/tblBookCopies');
    }
    /**
     * Go to the tblBookCopies edit page
     */
    $scope.goToTblBookCopies = function(bookid, branchid) {
        $scope.refreshTblBookCopies(bookid, branchid);
        $location.path('/tblBookCopies/'+bookid+'/'+branchid);
    }

    // Actions

    /**
     * Save tblBookCopies
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = TblBookCopies.create;
			} else {
				save = TblBookCopies.update;
			}
			save($scope.tblBookCopies).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.tblBookCopies = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete tblBookCopies
     */
    $scope.delete = function(bookid, branchid) {
	    try {
			MessageHandler.cleanMessage();
    	    TblBookCopies.delete(bookid, branchid).then(
				function(success) {
                	$scope.goToTblBookCopiesList();
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
        $scope.tblBookCopies = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $routeParams.bookid != null && $routeParams.branchid != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshTblBookCopies($routeParams.bookid, $routeParams.branchid);
    } else {
        // List page
        $scope.refreshTblBookCopiesList();
    }
    
    
}]);
