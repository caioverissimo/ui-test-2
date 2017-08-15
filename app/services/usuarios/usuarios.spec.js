// usuarios.spec.js

describe('Usuarios controller', function() {

  var UsuariosController,
  crudService;

  beforeEach(angular.mock.module('usuarios'));

  var $controller;

  beforeEach(inject(function(_$controller_, _crudService_){
    $controller = _$controller_;
    crudService = _crudService_;
  }));

  beforeEach(function() {

    UsuariosController = $controller('UsuariosController', {
      'crudService': crudService
    });

  });

  it('should exist', function() {

    expect(UsuariosController).toBeDefined();
  });

  describe('.init', function() {

    it('should exist', function() {
      expect(UsuariosController.init).toBeDefined();
    });

    // TODO: descobrir como fazer a verificacao se init() rodou o metodo da
    // factory injetada (crudService)
    // describe('crudService.setContextURL', function() {
    //   it('to have been called', function() {
    //
    //     // spyOn(crudService, 'setContextURL');
    //     UsuariosController.init();
    //     expect(crudService).toHaveBeenCalled();
    //
    //   });
    // });
  });

  describe('.setup', function() {

    it('should exist', function() {
      expect(UsuariosController.setup).toBeDefined();
    });

    it('to have been called', function() {

      spyOn(UsuariosController, 'setup');

      UsuariosController.init();
      expect(UsuariosController.setup).toHaveBeenCalled();
    });
  });


  describe('.doSome()', function() {

    it('to have been called', function() {

      spyOn(UsuariosController, 'doSome');

      UsuariosController.setup();
      expect(UsuariosController.doSome).toHaveBeenCalled();
    });
  });

  describe('.filterModel', function() {

    it('should be defined', function() {
      expect(UsuariosController.filterModel).toBeDefined();
    });

    describe('.quantity', function() {

      it('should be equals 10', function() {
        expect(UsuariosController.filterModel.quantity).toEqual(10);
      });
    });

    describe('.columns', function() {

      it('should be equals 1', function() {
        expect(UsuariosController.filterModel.columns).toEqual(1);
      });
    });

    describe('.direction', function() {

      it('should be equals 1', function() {
        expect(UsuariosController.filterModel.direction).toEqual(1);
      });
    });

  });

  describe('.settings', function() {

  });
});
