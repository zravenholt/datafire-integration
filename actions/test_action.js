"use strict";
let datafire = require('datafire');
//sample action to test Datafire
let reddit_rss = require('@datafire/reddit_rss').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let feed = await reddit_rss.subreddit({
      subreddit: "sports",
    }, context);
    return feed;
  },
});
