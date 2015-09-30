global.__base = __dirname + '/';

var q = require('q');
var util = require(__base + 'lib/util');
var Region = require(__base + 'lib/region');
var Regions = require(__base + 'lib/regions');

module.exports = {
  getRegions: function(regionName) {
    var url = regionName + '/?nospatial=true';
    var deferred = q.defer();

    util.callAPI(url).then(function(regions) {
      deferred.resolve(new Regions(regionName,
        regions.map(function(region) {
          region.region = regionName;
          return new Region(region);
        })
      ));
    });

    return deferred.promise;
  },

  getRegionDetail: function(regionName, regionId) {
    var region = new Region({ region: regionName, id: regionId});
    return region.getDetail();
  },

  getRegionData: function(regionName, regionId, params) {
    var region = new Region({ region: regionName, id: regionId});
    return region.getData(params);
  }
};
