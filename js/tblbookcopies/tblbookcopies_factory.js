'use strict';

/**
 * Factory for TblBookCopies
 */
tblBookCopiesModule.factory('TblBookCopies', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage tblBookCopies
    var entityURL = restURL + '/tblBookCopies';
	
	/**
     * Validate tblBookCopies
     * @param tblBookCopies tblBookCopies
     * @throws validation exception
     */
	var validate = function (tblBookCopies) {
		var errors = [];
        if( tblBookCopies.bookid == null || tblBookCopies.bookid == '' ) {
			errors.push('tblBookCopies.id.not.defined');
		}
        if( tblBookCopies.branchid == null || tblBookCopies.branchid == '' ) {
			errors.push('tblBookCopies.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all tblBookCopiess as list items
         * @return all tblBookCopiess as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/tblBookCopies');
    	},

        /**
         * Get all tblBookCopiess
         * @return all tblBookCopiess
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get tblBookCopies
         * @param bookid bookid
         * @param branchid branchid
         * @return tblBookCopies
         */
    	get: function(bookid, branchid) {
    	    var url = entityURL + '/' + bookid + '/' + branchid;
        	return $http.get(url);
    	},

        /**
         * Create a new tblBookCopies
         * @param tblBookCopies tblBookCopies
         * @return tblBookCopies saved
         */
		create: function(tblBookCopies) {
			validate(tblBookCopies)
			var url = entityURL;
			return $http.post(url, tblBookCopies);
    	},

        /**
         * Update tblBookCopies
         * @param tblBookCopies tblBookCopies
         * @return tblBookCopies saved
         */
    	update: function(tblBookCopies) {
			validate(tblBookCopies)
			var url = entityURL + '/' + tblBookCopies.bookid + '/' + tblBookCopies.branchid;
			return $http.put(url, tblBookCopies);
    	},

		/**
         * Delete tblBookCopies
         * @param bookid bookid
         * @param branchid branchid
         */
    	delete: function(bookid, branchid) {
        	var url = entityURL + '/' + bookid + '/' + branchid;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

