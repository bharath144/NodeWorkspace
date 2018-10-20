console.log('Hola from bot.js!');
console.log('Twitr Bot starting!');

const Twit = require('twit');
const config = require('./config');

const twt = new Twit(config);
let random = 0;

lookupTweets();
sendTweet();
setInterval(sendTweet, 1000 * 20);

/**
 * Send a tweet
 */
function sendTweet() {
  random = Math.floor(Math.random() * 100);
  const tweet = {
    status: `#atalavitalasutala ${random}`,
  };

  twt.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log(`Something went wrong ${err}`);
    } else {
      console.log(`It worked! ${data.id}`);
      console.log(`It worked! ${data.text}`);
    }
  });
}

/**
 * Lookup tweets
 */
function lookupTweets() {
  const params = {
    q: '#atalavitalasutala',
    count: 20,
  };
  twt.get('search/tweets', params, (err, data, response) => {
    const tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
      const status = tweets[i].text;
      console.log(`${i + 1} ${status}`);
    }
  });
}
