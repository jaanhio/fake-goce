export function generateSlackMessage(message, channel, user = null) {
  const textSection = generateTextSection(message);
  const actionContextSection = generateActionContextSection(user);

  const blocks = [textSection, actionContextSection];

  return {
    "channel": channel,
    "blocks": blocks
  }
}

function generateTextSection(message) {
  return {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": message
    }
  }
}

function generateActionContextSection(user) {
  return user ? {
    "type": "context",
		"elements": [
			{
				"type": "mrkdwn",
				"text": `${user} is looking into this`
			}
		]
  } : {
    "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Assign Alert To Me",
            },
            "style": "danger"
          }
        ]
  }
}