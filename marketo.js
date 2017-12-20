'use strict';
let datafire = require('datafire');
let openapi = require('./marketo.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, 'marketo');