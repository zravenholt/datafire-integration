# Project Title: Datafire Integration

> Integrates Marketo's OAuth and Rest APIs to Datafire.

## Team

  - __Product Owner__: Zane Ravenholt


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#Requirements)


## Usage

> Steps to set up and run this project:

Make sure the openAPI.json file found at ./integrations/marketoRestAPI/marketoRestAPI.json has your correct Marketo hostname for its Swagger specification. 

This is the code in your Marketo end point: 
https://**111-AAA-111**.mktorest.com/rest. You can find yours in your Marketo app at Admin -> Integration -> Web Services.

Add it to your json file, at: 
{ 
  "swagger": "2.0",
  ... : ...,
  **"host": "111-AAA-111.mktorest.com"**
}

Repeat this for the other Marketo json file in ./integrations/marketoOAuth/marketoOAuth.json.

Run: 
```sh
npm install
node ./integrations/marketoRestAPI/index.js
node ./integrations/marketoOAuth/index.js
```

This updates your details.json files with the new Swagger hostname. Push the changed code back to your forked repo.

Log onto Datafire, start a new project and clone your updated repo in Project settings.

Then, fill in the required fields for OAuth of Client ID and Client Secret for your actions found in ./actions. Client details can be found in Marketo's app at Admin -> Integration -> Launchpoint.

From here, you can make any actions desired, by first having an OAuth action that returns your access token, and include that token in all subsequent calls to the Rest API.

## Requirements

"datafire": "^2.17.0"