var test = require('tap').test;
var logger = require('../');
var pin = require('linchpin');
var nock = require('nock');

nock('https://logs.loggly.com:443')
  .post('/inputs/TOKEN', {"message":"foobar"})
  .reply(200, {"response":"ok"});

test('Log Error to Loggly', function(t) {
  logger({
    token: 'TOKEN'
  });

  pin.on('ERROR-SUBMITTED', function(body) {
    t.equals(body.response, 'ok', 'Should Log Error to Loggly');
    t.end();
  });
  pin.emit('ERROR', { message: 'foobar' });
  
});
