const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'amor') {
    msg.reply("Ella no me ama :c")
  }
  if (msg.content === 'vida') {
    msg.reply('Es un sueño sin sentido alguno');
  }
  if (msg.content === 'sentimiento') {
    msg.reply('para que se necesita eso?')
  }
  if (msg.content === 'amigos') {
    msg.reply('no importa la cantidad sino la calidad :")')
  }
  if (msg.content === 'yo') {
    msg.reply('Soledad, Tristeza, Vacío, Miedo, Debilidad, Desesperanza.')
  }
  if (msg.content ==='bachata') {
    msg.reply('playlist: https://spoti.fi/2MX91qH')
  }
});

client.login(botconfig.token);