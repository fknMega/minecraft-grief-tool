const fs = require('fs');
const mineflayer = require('mineflayer')
var setTitle = require('console-title');
setTitle('auto OP giver (By MegaGangster)');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Target Server ip: ", function(ip) {

rl.question("Owner username: ", function(username) {
    

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
});

























//Random loop code that I took so the console will not close lol
function someAsyncOperation(callback) {
    fs.readFile('/path/to/file', callback);
  }
  
  const timeoutScheduled = Date.now();
  
  setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
  
    console.log(`${delay}ms have passed since I was scheduled`);
  }, 1000000);
  
  someAsyncOperation(() => {
    const startCallback = Date.now();
  
    while (Date.now() - startCallback < 10) {
    }

  })
