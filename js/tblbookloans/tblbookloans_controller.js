'use strict';

/**
 * Controller for TblBookLoans
 **/
tblBookLoansModule.controller('TblBookLoansCtrl', ['TblBookLoans',  'TblBook', 'TblLibraryBranch', 'TblBorrower', '$scope', '$routeParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(TblBookLoans, TblBook, TblLibraryBranch, TblBorrower, $scope, $routeParams, $http, $location, $cookies, MessageHandler, restURL) {
	 'TblBook',  'TblLibraryBranch',  'TblBorrower',     // edition mode
    $scope.mode = null;
    
	// list of tblBookLoanss
    $scope.tblBookLoanss = [];
	// tblBookLoans to edit
    $scope.tblBookLoans = null;

	// referencies entities
	$scope.items = {};
    // tblBooks
	$scope.items.tblBooks = [];
    // tblLibraryBranchs
	$scope.items.tblLibraryBranchs = [];
    // tblBorrowers
	$scope.items.tblBorrowers = [];

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
		TblBorrower.getAllAsListItems().then(
				function(success) {
        	        $scope.items.tblBorrowers = success.data;
            	}, 
	            MessageHandler.manageError);
    };
    
    /**
     * Refresh tblBookLoanss list
     */
    $scope.refreshTblBookLoansList = function() {
    	try {
			$scope.tblBookLoanss = [];
        	TblBookLoans.getAll().then(
				function(success) {
        	        $scope.tblBookLoanss = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh tblBookLoans
     */
    $scope.refreshTblBookLoans = function(bookid, branchid, cardno) {
    	try {
        	$scope.tblBookLoans = null;
	        TblBookLoans.get(bookid, branchid, cardno).then(
				function(success) {
        	        $scope.tblBookLoans = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the tblBookLoanss list page
     */
    $scope.goToTblBookLoansList = function() {
        $scope.refreshTblBookLoansList();
        $location.path('/tblBookLoans');
    }
    /**
     * Go to the tblBookLoans edit page
     */
    $scope.goToTblBookLoans = function(bookid, branchid, cardno) {
        $scope.refreshTblBookLoans(bookid, branchid, cardno);
        $location.path('/tblBookLoans/'+bookid+'/'+branchid+'/'+cardno);
    }

    // Actions

    /**
     * Save tblBookLoans
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = TblBookLoans.create;
			} else {
				save = TblBookLoans.update;
			}
			save($scope.tblBookLoans).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.tblBookLoans = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete tblBookLoans
     */
    $scope.delete = function(bookid, branchid, cardno) {
	    try {
			MessageHandler.cleanMessage();
    	    TblBookLoans.delete(bookid, branchid, cardno).then(
				function(success) {
                	$scope.goToTblBookLoansList();
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
        $scope.tblBookLoans = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $routeParams.bookid != null && $routeParams.branchid != null && $routeParams.cardno != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshTblBookLoans($routeParams.bookid, $routeParams.branchid, $routeParams.cardno);
    } else {
        // List page
        $scope.refreshTblBookLoansList();
    }
    
    
}]);
