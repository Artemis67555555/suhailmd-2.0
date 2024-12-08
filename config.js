const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349164384819";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_20_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICA1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3M3ZFWmd5d3YzaWpyc2Fja1ZldmwxRjByMUtVK3ZNTnJlRXA4a3NpMmxFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDa2c5MEFYOFFqdUx3OE1memlTNjZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0ZmFhZWE3LTAyMTctNGU0My1iY2RiLTA4YjEwYWZhNDA3MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDEsXG4gICAgICA5NixcbiAgICAgIDY3LFxuICAgICAgMjIzLFxuICAgICAgMTgsXG4gICAgICAxNDEsXG4gICAgICA2MCxcbiAgICAgIDIwNCxcbiAgICAgIDIxOCxcbiAgICAgIDgxLFxuICAgICAgMTMsXG4gICAgICAxNDYsXG4gICAgICAzNCxcbiAgICAgIDIsXG4gICAgICAxMzUsXG4gICAgICAyMjgsXG4gICAgICAxODcsXG4gICAgICAxODYsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAxNTQsXG4gICAgICAyNDEsXG4gICAgICA1MCxcbiAgICAgIDE0OSxcbiAgICAgIDEzNCxcbiAgICAgIDIyNCxcbiAgICAgIDcyLFxuICAgICAgMTk1LFxuICAgICAgMTg5LFxuICAgICAgMjIzLFxuICAgICAgNjIsXG4gICAgICAxNzMsXG4gICAgICAzNixcbiAgICAgIDg3LFxuICAgICAgNTQsXG4gICAgICAxOTMsXG4gICAgICAxMTcsXG4gICAgICAxOTIsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNU1QRFpLRENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjQzODQ4MTk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIwMzI3OTQ2NzU2MTgwOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2ZEcWFzSEVOakoxYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrYVp5QnFwOWU0cDQ1YVVLeUIybkpoaUljNkRZa3QwOGFOblJ6MmxiVkJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRDeVU4dCtFMUNBU2RTcDVHbjN0aW9pYkVIVTdNVDVxTEpvaWxFNUlPYzBQejJyS1dhRFVYWk9zSXE2Wnc4YWVWV1pVUm52RnNicnZ5TVB6c2t6SEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVkZ1ZhbVlkQ2M4QkhHVCtTNmRpc3lIMHd0R2tOUTRlSnJXVEErQUo0bHdVMkRrUUQ4eTk0TWNhcEtIRENXVTVHQkNMYUxvSUN5S0xZRnIyOWQ0K0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjQzODQ4MTk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjQ5NjI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHlUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEeVQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1bllDNjJrQkY5NHJSUkZsaS9NS3ExUGtkZFBYQ3N4cXMyVFdZT0pJMXFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5Njk5MDYwODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY0OTYzNDgyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
