'use strict';

/**
 * Factory for TblBook
 */
tblBookModule.factory('TblBook', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage tblBook
    var entityURL = restURL + '/tblBook';
	
	/**
     * Validate tblBook
     * @param tblBook tblBook
     * @throws validation exception
     */
	var validate = function (tblBook) {
		var errors = [];
        if( tblBook.bookid == null || tblBook.bookid == '' ) {
			errors.push('tblBook.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all tblBooks as list items
         * @return all tblBooks as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/tblBook');
    	},

        /**
         * Get all tblBooks
         * @return all tblBooks
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get tblBook
         * @param bookid bookid
         * @return tblBook
         */
    	get: function(bookid) {
    	    var url = entityURL + '/' + bookid;
        	return $http.get(url);
    	},

        /**
         * Create a new tblBook
         * @param tblBook tblBook
         * @return tblBook saved
         */
		create: function(tblBook) {
			validate(tblBook)
			var url = entityURL;
			return $http.post(url, tblBook);
    	},

        /**
         * Update tblBook
         * @param tblBook tblBook
         * @return tblBook saved
         */
    	update: function(tblBook) {
			validate(tblBook)
			var url = entityURL + '/' + tblBook.bookid;
			return $http.put(url, tblBook);
    	},

		/**
         * Delete tblBook
         * @param bookid bookid
         */
    	delete: function(bookid) {
        	var url = entityURL + '/' + bookid;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

