// users.spec.js

describe('Users factory', function() {
  var Users;

  // Load our api.users module
  beforeEach(angular.mock.module('api.users'));

  // Set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  // A simple test to verify the Users service exists
  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  // A set of tests for our Users.all() method
  describe('.all()', function() {
    // A simple test to verify the method all exists
    it('should exist', function() {
      expect(Users.all).toBeDefined();
    });
  });
});
