'use strict';
let datafire = require('datafire');
let openapi = require('./marketoOAuth.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, 'marketo');