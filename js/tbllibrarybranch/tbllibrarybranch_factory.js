'use strict';

/**
 * Factory for TblLibraryBranch
 */
tblLibraryBranchModule.factory('TblLibraryBranch', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage tblLibraryBranch
    var entityURL = restURL + '/tblLibraryBranch';
	
	/**
     * Validate tblLibraryBranch
     * @param tblLibraryBranch tblLibraryBranch
     * @throws validation exception
     */
	var validate = function (tblLibraryBranch) {
		var errors = [];
        if( tblLibraryBranch.branchid == null || tblLibraryBranch.branchid == '' ) {
			errors.push('tblLibraryBranch.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all tblLibraryBranchs as list items
         * @return all tblLibraryBranchs as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/tblLibraryBranch');
    	},

        /**
         * Get all tblLibraryBranchs
         * @return all tblLibraryBranchs
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get tblLibraryBranch
         * @param branchid branchid
         * @return tblLibraryBranch
         */
    	get: function(branchid) {
    	    var url = entityURL + '/' + branchid;
        	return $http.get(url);
    	},

        /**
         * Create a new tblLibraryBranch
         * @param tblLibraryBranch tblLibraryBranch
         * @return tblLibraryBranch saved
         */
		create: function(tblLibraryBranch) {
			validate(tblLibraryBranch)
			var url = entityURL;
			return $http.post(url, tblLibraryBranch);
    	},

        /**
         * Update tblLibraryBranch
         * @param tblLibraryBranch tblLibraryBranch
         * @return tblLibraryBranch saved
         */
    	update: function(tblLibraryBranch) {
			validate(tblLibraryBranch)
			var url = entityURL + '/' + tblLibraryBranch.branchid;
			return $http.put(url, tblLibraryBranch);
    	},

		/**
         * Delete tblLibraryBranch
         * @param branchid branchid
         */
    	delete: function(branchid) {
        	var url = entityURL + '/' + branchid;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

