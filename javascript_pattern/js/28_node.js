const fs = require("fs");
const readline = require('readline');
let rl = readline.createInterface({
	input: fs.createReadStream()
})

let linenum = 0;
rl.on('line',function(line){
	console.log(line);
	linenum++;
})
rl.on('close',function(){
	console.log('linenum',linenum);
})