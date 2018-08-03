const EventEmitter = require('events').EventEmitter();
const emitter1 = new EventEmitter();

emitter1.on('some',()=>{
	// 监听 some 事件
	console.log("some event is occured 1");
})

emitter1.on("some",()=>{
	// 监听 some 事件
	console.log("some event is occured 2")
})

// 触发 some 事件
emitter1.emit("some");