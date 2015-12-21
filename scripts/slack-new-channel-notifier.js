var SlackAPI = require('slackbotapi');
var token = process.env.SLACK_API_TOKEN;
var botName = process.env.SLACK_BOT_NAME;
var notifyChannelName = process.env.SLACK_CHANNEL_NAME;

var express = require('express');
var app     = express();

if (!token) {
    console.error("SLACK_API_TOKEN is not set");
    process.exit(1);
}

console.info("bot name: " + botName);
console.info("channel name: " + notifyChannelName);

var slack = new SlackAPI({
    'token': token,
	'logging': true,
    'autoReconnect': true
});

slack.on('channel_created', function (data) {
	console.info("channel created.");
	var createdChannelID = data.channel.id
	var createdChannelName = data.channel.name
    var data = {
        channel: notifyChannelName,
        username: botName,
        text: "新しいチャンネルが作成されました: <#" + createdChannelID + "|" + createdChannelName +">",
    };
    slack.reqAPI("chat.postMessage", data);
});

// start web server for Heroku running
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    var result = 'App is running';
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
