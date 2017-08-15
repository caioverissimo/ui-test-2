// users.js
(function() {
  'use strict';

  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('crud', []);

  angular.module('crud').factory('crudService', crudService);

  function crudService() {
    var contextURL;

    return {
      setContextURL: setContextURL,
      getContextURL: getContextURL,
      setupConfig: setupConfig
    };

    function setContextURL(path) {
      contextURL = path;
    }

    function getContextURL() {
      return contextURL;
    }

    function setupConfig() {
      
    }


    // Defining all to make our test pass. It doesn't need to do anything yet.
    // CrudService.all = function() {
    //
    // };
  }
})();
