var q = require('q');
var util = require(__base + 'lib/util');

function Region(props) {
  var self = this;
  updateProps(props);

  this.getDetail = function() {
    var url = self.region + '/' + self.id;
    var deferred = q.defer();

    util.callAPI(url).then(function(detail) {
      updateProps(detail);
      deferred.resolve(self);
    });

    return deferred;
  };

  this.getData = function(params) {
    var url = [
      self.region,
      params.measure,
      params.dimension,
      '?region_id=' + self.id + '&'
    ].join('/');
    var deferred = q.defer();
    var qs = [];
    var param;

    for (param in params) {
      if (params.hasOwnProperty(param) && param !== 'measure' && param !== 'dimension') {
        qs.push(param + '=' + params[param]);
      }
    }
    url += qs.join('&');

    util.callAPI(url).then(function(data) {
      console.log(data);
      updateProps({ data: data });
      deferred.resolve(self);
    });

    return deferred;
  };

  function updateProps(props) {
    var prop;
    for (prop in props) {
      if (props.hasOwnProperty(prop)) {
        self[prop] = props[prop];
      }
    }
  }
}

module.exports = Region;
