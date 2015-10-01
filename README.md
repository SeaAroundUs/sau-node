## SeaAroundUs API Wrapper
Node.js wrapper for the [Sea Around Us API](https://github.com/SeaAroundUs/sau-web-mt).


### Installation
    $ npm install sau-node


### Example usage
    # include the helper library
    var sau = require('sau-node');
    
    # get list of EEZs
    var eezs = sau.getRegions('eez')
      .then(function(res) { regions = res; });
    
    # get details for a single EEZ
    var brazil = eezs.getByTitle('Brazil (mainland)');
    brazil = brazil.getDetail()
      .then(function(res) { brazil = res; });
    
    # alternative way without getting the region list
    brazil = sau.getRegionDetail('eez', 76)
      .then(function(res) { brazil = res; });
    
    # using LMEs for the next example
    var lmes = sau.getRegions('lme')
      .then(function(res) { lmes = res; });
    
    # sample set of parameters for catch data
    var catchDataParams = {
      measure: 'tonnage',
      dimension: 'taxon',
      sciname: true,
      limit: 10
    };
    
    # get catch data for a single LME
    var northSea = lmes.getByTitle('North Sea');
    northSea = northSea.getData(catchDataParams)
      .then(function(res) { northSea = res; });
    
    # alternative way without getting the region list
    northSea = sau.getRegionData('lme', 22, catchDataParams)
      .then(function(res) { northSea = res; });


### Available parameters
Regions:
* eez
* lme
* rfmo
* fishing-entity

Measures:
* tonnage
* value

Dimensions:
* taxon
* commercialgroup
* functionalgroup
* country
* sector
* catchtype
* reporting-status

Other catch data parameters:
* limit (integer)
* sciname (boolean)
