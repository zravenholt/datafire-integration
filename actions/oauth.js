"use strict";
let datafire = require('datafire');

let marketo = datafire.Integration.fromName('marketoOAuth').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let responseOfIdentity = await marketo.identityUsingGET({
      client_id: "CLIENT ID",
      client_secret: "CLIENT SECRET",
      grant_type: "client_credentials",
    }, context);
    return responseOfIdentity;
  },
});
