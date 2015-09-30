function Regions(regionName, regions) {
  var self = this;

  this.region = regionName;
  this.regions = regions;

  this.getById = function(id) {
    return findByProperty('id', id);
  };

  this.getByTitle = function(title) {
    return findByProperty('title', title);
  };

  function findByProperty(prop, value) {
    var i;

    for (i = 0; i < self.regions.length; i++) {
      if (self.regions[i][prop] === value) {
        return self.regions[i];
      }
    }

    return null;
  }
}

module.exports = Regions;
