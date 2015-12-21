# Slack-New-Channel-Notifier
Send notification on creating a new Slack channel.

# Setup
## install node modules
```
npm install
```

## setup configurations
```
export SLACK_API_TOKEN="xoxp-XXXXXXXX-XXXXXXXX-XXXXX"
export SLACK_CHANNEL_NAME="#channel-name"
export SLACK_BOT_NAME="MyBotName"
```
You can confirm your Slack api token from [the page](https://api.slack.com/web).

# start process
```
npm start
```

# run the app on Heroku
Setup Heroku configs and deploy with git.
ref: https://devcenter.heroku.com/articles/git

```
heroku config:add SLACK_API_TOKEN="xoxp-XXXXXXXX-XXXXXXXX-XXXXX"
heroku config:add SLACK_CHANNEL_NAME="#channel-name"
heroku config:add SLACK_BOT_NAME="MyBotName"

git push origin heroku
```

