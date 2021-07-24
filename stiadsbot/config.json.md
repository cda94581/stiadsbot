---
title: config.json
---
```json
{
	"prefix": "STRING",
	"token": "STRING",
	"welcomechannel": "STRING OF ID",
	"levelinfo": {
		"levels": [	"INT" ],
		"roles": [ "STRINGS OF IDS" ],
		"blacklist": [	"STRINGS OF IDS" ],
		"mysqlinfo": {
			"host": "STRING",
			"user": "STRING",
			"password": "STRING"
		},
		"userblacklist": [ "STRINGS OF IDS" ]
	},
	"feedback_channel": "STRING OF ID",
	"n_vwls_cht_channel": "STRING OF ID",
	"modmessagingchannel": "STRING OF ID",
	"modifications": {
		"channel": "STRING OF ID",
		"open": false
	},
	"reactionroles": [
		{
			"channel": "STRING OF ID",
			"message": "STRING OF ID",
			"emoji": "STRING OF ID",
			"role": "STRING OF ID"
		}
	]
}
```

Documentation WIP