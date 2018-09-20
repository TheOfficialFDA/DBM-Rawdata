{
  "name": "ban",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "uxKep",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "permission": "BAN_MEMBERS",
      "iftrue": "2",
      "iftrueVal": "7",
      "iffalse": "0",
      "iffalseVal": "8",
      "name": "Check Member Permissions"
    },
    {
      "info": "1",
      "infoIndex": "2",
      "storage": "1",
      "varName": "bano",
      "name": "Store Command Params"
    },
    {
      "title": ":x: NO PERMISSIONS",
      "author": "",
      "color": "RED",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "noperm",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "noperm",
      "message": "Sorry, but you do not have permission to execute this command!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "noperm",
      "message": "${member} ",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "noperm",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "0",
      "varName": "",
      "reason": "${tempVars(\"bano\")}",
      "name": "Ban Member"
    },
    {
      "title": "Banned ${tempVars(\"name\")}",
      "author": "",
      "color": "",
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
      "message": "Banned: ${mentionedUser}\nReason: ${tempVars(\"kik \")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ]
}