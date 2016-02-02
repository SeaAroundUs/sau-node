var request = require('request');
var q = require('q');

var baseURL = 'http://api.seaaroundus.org/api/v1/';

module.exports = {
  callAPI: function(url) {
    var deferred = q.defer();

    var options = {
      url: baseURL + url,
      headers: {
        'X-Request-Source': 'node'
      }
    };

    request(options, function(err, res, body) {
      if (!err && res.statusCode === 200) {
        deferred.resolve(JSON.parse(body).data);
      } else {
        deferred.reject(err);
      }
    });

    return deferred.promise;
  }
};
