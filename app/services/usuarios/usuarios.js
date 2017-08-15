// usuarios.js

(function(){

  'use strict';

  angular.module('usuarios', ['crud']);

  angular.module('usuarios')
  .controller('UsuariosController', UsuariosController);

  UsuariosController.$inject = ['crudService'];

  function UsuariosController(crudService) {

    var vm  = this;
    vm.filterModel = {
      quantity: 10,
      columns: 1,
      direction: 1
    };


    vm.setup = setup;

    vm.doSome = doSome;

    vm.init = init;

    function doSome() {
      // console.log('doSome !!');
    }

    function setup() {

      // console.log('setup()');

      vm.doSome();

    }
    function init() {
      // console.log('init()');
      crudService.setContextURL('wow/yey');
      vm.setup();
    }

    vm.init();

  }

})();
