'use strict';
let datafire = require('datafire');
let openapi = require('./marketoOAuth.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, 'marketoOAuth');

let fs = require('fs');
fs.writeFileSync(__dirname + '/details.json', JSON.stringify(module.exports.getDetails(true)));
