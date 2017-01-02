'use strict';

/**
 * Factory for TblBookLoans
 */
tblBookLoansModule.factory('TblBookLoans', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage tblBookLoans
    var entityURL = restURL + '/tblBookLoans';
	
	/**
     * Validate tblBookLoans
     * @param tblBookLoans tblBookLoans
     * @throws validation exception
     */
	var validate = function (tblBookLoans) {
		var errors = [];
        if( tblBookLoans.bookid == null || tblBookLoans.bookid == '' ) {
			errors.push('tblBookLoans.id.not.defined');
		}
        if( tblBookLoans.branchid == null || tblBookLoans.branchid == '' ) {
			errors.push('tblBookLoans.id.not.defined');
		}
        if( tblBookLoans.cardno == null || tblBookLoans.cardno == '' ) {
			errors.push('tblBookLoans.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all tblBookLoanss as list items
         * @return all tblBookLoanss as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/tblBookLoans');
    	},

        /**
         * Get all tblBookLoanss
         * @return all tblBookLoanss
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get tblBookLoans
         * @param bookid bookid
         * @param branchid branchid
         * @param cardno cardno
         * @return tblBookLoans
         */
    	get: function(bookid, branchid, cardno) {
    	    var url = entityURL + '/' + bookid + '/' + branchid + '/' + cardno;
        	return $http.get(url);
    	},

        /**
         * Create a new tblBookLoans
         * @param tblBookLoans tblBookLoans
         * @return tblBookLoans saved
         */
		create: function(tblBookLoans) {
			validate(tblBookLoans)
			var url = entityURL;
			return $http.post(url, tblBookLoans);
    	},

        /**
         * Update tblBookLoans
         * @param tblBookLoans tblBookLoans
         * @return tblBookLoans saved
         */
    	update: function(tblBookLoans) {
			validate(tblBookLoans)
			var url = entityURL + '/' + tblBookLoans.bookid + '/' + tblBookLoans.branchid + '/' + tblBookLoans.cardno;
			return $http.put(url, tblBookLoans);
    	},

		/**
         * Delete tblBookLoans
         * @param bookid bookid
         * @param branchid branchid
         * @param cardno cardno
         */
    	delete: function(bookid, branchid, cardno) {
        	var url = entityURL + '/' + bookid + '/' + branchid + '/' + cardno;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

