const Discord = require('discord.js')
const client = new Discord.Client({
  disableEveryone: true,
  messageCacheMaxSize: 500,
  messageCacheLifetime: 120,
  messageSweepInterval: 60
});
const prefix = "e-";
const adminprefix = "e--";
const devs = ['343383616895713290']
client.login(process.env.SECRET_YEET);


client.on('message', message => {
     var argresult = message.content.split(` `).slice(1).join(' ');
       if (!devs.includes(message.author.id)) return;
      
   if (message.content.startsWith(adminprefix + 'setgame')) {
     client.user.setGame(argresult);
       message.channel.sendMessage(`**Chnaging To ..${argresult}**`)
   } else 
     if (message.content.startsWith(adminprefix + 'setname')) {
   client.user.setUsername(argresult).then
       message.channel.sendMessage(`**Changing To ..${argresult}**`)
   } else
     if (message.content.startsWith(adminprefix + 'setavatar')) {
   client.user.setAvatar(argresult);
     message.channel.sendMessage(`**Changing To ...${argresult}**`);
         } 
  });






  var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("476022605803946004");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});



client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("476022605803946004");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("475821467393589248");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`Invited By  ${Invite.inviter} `) ;         
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});








client.on('guildMemberAdd', member => {
  let memberavatar = member.user.avatarURL
    let welcomer = member.guild.channels.get('476022605803946004');
      if (!welcomer) return;     
      welcomer.send(`Welcome To **Elite Store**, ${member.user}! You are The **${member.guild.memberCount}** user!`);
      var Canvas = require('canvas')
     var jimp = require('jimp')
     const w = ['./img/w1.jpg'];
      let Image = Canvas.Image,
          canvas = new Canvas(401, 202),
          ctx = canvas.getContext('2d');
      ctx.patternQuality = 'bilinear';
      ctx.filter = 'bilinear';
      ctx.antialias = 'subpixel';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 401, 202);

})

              let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
              jimp.read(url, (err, ava) => {
                  if (err) return console.log(err);
                  ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                      if (err) return console.log(err);

                      //Avatar
                      let Avatar = Canvas.Image;
                      let ava = new Avatar;
                      ava.src = buf;
                      ctx.drawImage(ava, 152, 27, 95, 95);
                      
                                              //wl
                      ctx.font = '20px Arial Bold';
                      ctx.fontSize = '25px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText("Welcome To FlightBot Server", 210, 154);
                      
                      //ur name
                      ctx.font = '20px Arial';
                      ctx.fontSize = '28px';
                      ctx.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.fillText(member.user.username, 213, 190);
                      
welcomer.sendFile(canvas.toBuffer())
})
})
    });