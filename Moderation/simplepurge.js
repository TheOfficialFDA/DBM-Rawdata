{
  "name": "purge",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "eicjw",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "permission": "MANAGE_MESSAGES",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "6",
      "name": "Check Member Permissions"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "number",
      "name": "Store Command Params"
    },
    {
      "channel": "0",
      "count": "${tempVars(\"number\")}",
      "condition": "0",
      "custom": "",
      "varName": "",
      "name": "Delete Bulk Messages"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": ":x: NO PERMISSION",
      "author": "",
      "color": "RED",
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
      "message": "Sorry, but you don't have permission to use this command. ",
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