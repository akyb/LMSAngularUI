'use strict';

/**
 * Factory for TblBorrower
 */
tblBorrowerModule.factory('TblBorrower', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage tblBorrower
    var entityURL = restURL + '/tblBorrower';
	
	/**
     * Validate tblBorrower
     * @param tblBorrower tblBorrower
     * @throws validation exception
     */
	var validate = function (tblBorrower) {
		var errors = [];
        if( tblBorrower.cardno == null || tblBorrower.cardno == '' ) {
			errors.push('tblBorrower.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all tblBorrowers as list items
         * @return all tblBorrowers as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/tblBorrower');
    	},

        /**
         * Get all tblBorrowers
         * @return all tblBorrowers
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get tblBorrower
         * @param cardno cardno
         * @return tblBorrower
         */
    	get: function(cardno) {
    	    var url = entityURL + '/' + cardno;
        	return $http.get(url);
    	},

        /**
         * Create a new tblBorrower
         * @param tblBorrower tblBorrower
         * @return tblBorrower saved
         */
		create: function(tblBorrower) {
			validate(tblBorrower)
			var url = entityURL;
			return $http.post(url, tblBorrower);
    	},

        /**
         * Update tblBorrower
         * @param tblBorrower tblBorrower
         * @return tblBorrower saved
         */
    	update: function(tblBorrower) {
			validate(tblBorrower)
			var url = entityURL + '/' + tblBorrower.cardno;
			return $http.put(url, tblBorrower);
    	},

		/**
         * Delete tblBorrower
         * @param cardno cardno
         */
    	delete: function(cardno) {
        	var url = entityURL + '/' + cardno;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

