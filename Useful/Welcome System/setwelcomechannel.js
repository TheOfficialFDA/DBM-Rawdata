{
  "name": "setwchannel",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "GwUdc",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "permission": "ADMINISTRATOR",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "9",
      "name": "Check Member Permissions"
    },
    {
      "info": "4",
      "infoIndex": "1",
      "storage": "2",
      "varName": "memchannel",
      "name": "Store Command Params"
    },
    {
      "title": "I set the channel!",
      "author": "",
      "color": "BLUE",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "2",
      "varName": "memchannel",
      "name": "Save Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Sorry you don't have the `ADMINISTRATOR` permission!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "That channel doesn't exist or you didn't mention on\n\nREEE",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ]
}