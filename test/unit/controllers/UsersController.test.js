var request = require('supertest');

describe('UsersController', function() {

  describe('#userCRUD()', function() {
    var createdUser = {};

    it('should create a user', function (done) {
      request(sails.hooks.http.app)
        .post('/Users/Create')
        .send({
        	username: 'test',
        	password: 'test',
        	email: 'test@test.com',
        	isVerified: true
        })
        .expect(201, done);
    });

    it('should delete a user', function (done) {
      request(sails.hooks.http.app)
        .post('/Users/Destroy/1')
        .expect(200, done);
    });
  });
});