var pin = require('linchpin');
var request = require('request');

// Options
//
// {
//   token: "loggly token"
//  }
//

module.exports = function(opts) {
  pin.on('ERROR', function(err) {
    request.post('https://logs.loggly.com/inputs/' + opts.token,
      { json: err, headers: {'content-type': 'application/json' }},
      function(e,r,b) {
        if (e) { return console.log(e); }
        pin.emit('ERROR-SUBMITTED', b);
      });
  });
};
