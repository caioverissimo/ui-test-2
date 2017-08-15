// crud.spec.js

describe('Crud Service', function() {

  var crudService;

  var path = 'cadastro/centros-de-custo';

  beforeEach(angular.mock.module('crud'));

  beforeEach(inject(function(_crudService_) {

    crudService = _crudService_;
  }));

  it('shoud exist', function() {

    expect(crudService).toBeDefined();
  });

  describe('.setContextURL()', function() {

    it('should exist', function() {

      expect(crudService.setContextURL).toBeDefined();
    });

    it('should match a given path', function() {

      crudService.setContextURL(path);
      // console.log(path);
      expect(crudService.getContextURL()).toBe(path);
    });
  });

  describe('.setupConfig()', function() {

    it('should exist', function() {

      expect(crudService.setupConfig).toBeDefined();
    });

  });

  describe('.setupConfig()', function() {

    it('should exist', function() {

      expect(crudService.setupConfig).toBeDefined();
    });

  });

});
