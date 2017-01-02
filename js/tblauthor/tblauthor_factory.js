'use strict';

/**
 * Factory for TblAuthor
 */
tblAuthorModule.factory('TblAuthor', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage tblAuthor
    var entityURL = restURL + '/tblAuthor';
	
	/**
     * Validate tblAuthor
     * @param tblAuthor tblAuthor
     * @throws validation exception
     */
	var validate = function (tblAuthor) {
		var errors = [];
        if( tblAuthor.authorid == null || tblAuthor.authorid == '' ) {
			errors.push('tblAuthor.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all tblAuthors as list items
         * @return all tblAuthors as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/tblAuthor');
    	},

        /**
         * Get all tblAuthors
         * @return all tblAuthors
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get tblAuthor
         * @param authorid authorid
         * @return tblAuthor
         */
    	get: function(authorid) {
    	    var url = entityURL + '/' + authorid;
        	return $http.get(url);
    	},

        /**
         * Create a new tblAuthor
         * @param tblAuthor tblAuthor
         * @return tblAuthor saved
         */
		create: function(tblAuthor) {
			validate(tblAuthor)
			var url = entityURL;
			return $http.post(url, tblAuthor);
    	},

        /**
         * Update tblAuthor
         * @param tblAuthor tblAuthor
         * @return tblAuthor saved
         */
    	update: function(tblAuthor) {
			validate(tblAuthor)
			var url = entityURL + '/' + tblAuthor.authorid;
			return $http.put(url, tblAuthor);
    	},

		/**
         * Delete tblAuthor
         * @param authorid authorid
         */
    	delete: function(authorid) {
        	var url = entityURL + '/' + authorid;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

