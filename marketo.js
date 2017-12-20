'use strict';
let datafire = require('datafire');
let openapi = require('./integrations/marketo/marketoOAuth.json');
module.exports = datafire.Integration.fromOpenAPI(openapi, 'marketo');