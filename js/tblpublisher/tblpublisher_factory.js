'use strict';

/**
 * Factory for TblPublisher
 */
tblPublisherModule.factory('TblPublisher', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage tblPublisher
    var entityURL = restURL + '/tblPublisher';
	
	/**
     * Validate tblPublisher
     * @param tblPublisher tblPublisher
     * @throws validation exception
     */
	var validate = function (tblPublisher) {
		var errors = [];
        if( tblPublisher.publisherid == null || tblPublisher.publisherid == '' ) {
			errors.push('tblPublisher.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all tblPublishers as list items
         * @return all tblPublishers as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/tblPublisher');
    	},

        /**
         * Get all tblPublishers
         * @return all tblPublishers
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get tblPublisher
         * @param publisherid publisherid
         * @return tblPublisher
         */
    	get: function(publisherid) {
    	    var url = entityURL + '/' + publisherid;
        	return $http.get(url);
    	},

        /**
         * Create a new tblPublisher
         * @param tblPublisher tblPublisher
         * @return tblPublisher saved
         */
		create: function(tblPublisher) {
			validate(tblPublisher)
			var url = entityURL;
			return $http.post(url, tblPublisher);
    	},

        /**
         * Update tblPublisher
         * @param tblPublisher tblPublisher
         * @return tblPublisher saved
         */
    	update: function(tblPublisher) {
			validate(tblPublisher)
			var url = entityURL + '/' + tblPublisher.publisherid;
			return $http.put(url, tblPublisher);
    	},

		/**
         * Delete tblPublisher
         * @param publisherid publisherid
         */
    	delete: function(publisherid) {
        	var url = entityURL + '/' + publisherid;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

