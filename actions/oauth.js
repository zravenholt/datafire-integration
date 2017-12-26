"use strict";
let datafire = require('datafire');

let marketo = datafire.Integration.fromName('marketoOAuth').actions;
let marketoRestAPI = datafire.Integration.fromName('marketoRestAPI').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let responseOfIdentity = await marketo.identityUsingGET({
      client_id: "1026b5b5-61f9-484a-8012-02fdc0978510",
      client_secret: "L6gAfuwyZbWV8w87pIxgU1Ua8yDq6Mes",
      grant_type: "client_credentials",
    }, context);
    return responseOfIdentity;
  },
});
