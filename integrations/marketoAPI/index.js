'use strict';
let datafire = require('datafire');
let openapi = require('./marketoRestAPI.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, 'marketo');

let fs = require('fs');
fs.writeFileSync(__dirname + '/details.json', JSON.stringify(module.exports.getDetails(true)));
