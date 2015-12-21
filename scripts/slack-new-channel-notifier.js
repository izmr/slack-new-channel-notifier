var SlackAPI = require('slackbotapi');
var token = process.env.SLACK_API_TOKEN;
var botName = process.env.SLACK_BOT_NAME;
var notifyChannelName = process.env.SLACK_CHANNEL_NAME;

if (!token) {
    console.error("SLACK_API_TOKEN is not set");
    process.exit(1);
}

var slack = new SlackAPI({
    'token': token,
    'logging': true,
    'autoReconnect': true
});

slack.on('channel_created', function (data) {
	var createdChannelID = data.channel.id
	var createdChannelName = data.channel.name
    var data = {
        channel: notifyChannelName,
        username: botName,
        text: "新しいチャンネルが作成されました: <#" + createdChannelID + "|" + createdChannelName +">",
    };
    slack.reqAPI("chat.postMessage", data);
});
