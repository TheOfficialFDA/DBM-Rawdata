{
  "name": "kick",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "dyVlr",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "permission": "KICK_MEMBERS",
      "iftrue": "2",
      "iftrueVal": "8",
      "iffalse": "0",
      "iffalseVal": "8",
      "name": "Check Member Permissions"
    },
    {
      "info": "1",
      "infoIndex": "2",
      "storage": "1",
      "varName": "kik ",
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
      "message": "${member} ",
      "footerIcon": "",
      "name": "Set Embed Footer"
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
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "comment": "Kick",
      "color": "#8000ff",
      "name": "Comment"
    },
    {
      "member": "0",
      "varName": "",
      "reason": "${tempVars(\"kik \")}",
      "name": "Kick Member"
    },
    {
      "title": "Kicked ${tempVars(\"name\")}",
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
      "message": "Kicked: ${mentionedUser}\nReason: ${tempVars(\"kik \")}",
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