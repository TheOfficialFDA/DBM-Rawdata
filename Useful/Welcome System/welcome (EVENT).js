{
  "name": "memberjoin",
  "temp": "name",
  "event-type": "6",
  "_id": "ZaFSD",
  "actions": [
    {
      "info": "1",
      "find": "${serverVars(\"memchannel\")}",
      "storage": "1",
      "varName": "",
      "name": "Find Channel"
    },
    {
      "member": "2",
      "varName": "name",
      "info": "2",
      "storage": "1",
      "varName2": "username",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "name",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "title": "",
      "author": "${tempVars(\"username\")}",
      "color": "",
      "timestamp": "false",
      "url": "",
      "authorIcon": "${tempVars(\"avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${serverVars(\"welcomemsg\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "memchannel",
      "storage3": "0",
      "varName3": "",
      "name": "Send Embed Message"
    }
  ]
}