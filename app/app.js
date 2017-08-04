// app.js

(function() {
  'use strict';

  angular.module('uiTest2', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
