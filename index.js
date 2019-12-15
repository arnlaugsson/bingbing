const { App } = require('@slack/bolt');

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
});


/* Add functionality below  */

(async () => {
    // Start the app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️Bolt app is running!' );
})();
