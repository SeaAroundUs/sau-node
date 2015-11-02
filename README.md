## SeaAroundUs API Wrapper
Node.js wrapper for the [Sea Around Us API](https://github.com/SeaAroundUs/sau-web-mt).

The Sea Around Us data are licensed to the public under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License.  
Please read the data use policy described in the DATA_USE file.

This software is free software:  you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.  See the LICENSE file for a full statement of the License.


### Installation
```bash
$ npm install sau-node
```


### Example usage
```javascript
// include the helper library
var sau = require('sau-node');

// get list of EEZs
var eezs = sau.getRegions('eez')
  .then(function(res) { regions = res; });

// get details for a single EEZ
var brazil = eezs.getByTitle('Brazil (mainland)');
brazil = brazil.getDetail()
  .then(function(res) { brazil = res; });

// alternative way without getting the region list
brazil = sau.getRegionDetail('eez', 76)
  .then(function(res) { brazil = res; });

// using LMEs for the next example
var lmes = sau.getRegions('lme')
  .then(function(res) { lmes = res; });

// sample set of parameters for catch data
var catchDataParams = {
  measure: 'tonnage',
  dimension: 'taxon',
  sciname: true,
  limit: 10
};

// get catch data for a single LME
var northSea = lmes.getByTitle('North Sea');
northSea = northSea.getData(catchDataParams)
  .then(function(res) { northSea = res; });

// alternative way without getting the region list
northSea = sau.getRegionData('lme', 22, catchDataParams)
  .then(function(res) { northSea = res; });
```


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
