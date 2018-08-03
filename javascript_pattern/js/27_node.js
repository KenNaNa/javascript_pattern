var fs = require("fs");
var readStream = fs.createReadStream();
var length = 0;
readStream.on('data',function(chunk){
	let len = chunk.toString().length;
	length += len
})

readStream.on('end',function(){
	console.log('length',length);
})