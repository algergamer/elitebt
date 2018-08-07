const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
const jimp = require('jimp')
const canvas = require('canvas')
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



client.on('message', message => {
if(message.content === 'Hey') {
message.reply('i am a live')
}

});



 client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
      let welcomer = member.guild.channels.find('name', "chat");
        if (!welcomer) return;     
        welcomer.send(`Welcome To **Elite Store**, ${member.user}! You are The **${member.guild.memberCount}** user!`);
        var Canvas = require('canvas')
       var jimp = require('jimp')
       const w = ['./assets/w1.jpg'];
        let Image = Canvas.Image,
            canvas = new Canvas(2000, 600),
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

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(30, -50) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //Avatar
                        let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.drawImage(ava, 1000, 300, 350, 350);
                        
                    
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
