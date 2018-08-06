const Discord = require('discord.js')
const client = new Discord.Client({
  disableEveryone: true,
  messageCacheMaxSize: 500,
  messageCacheLifetime: 120,
  messageSweepInterval: 60
});
const prefix = "e-";
client.login(process.env.SECRET_YEET);
