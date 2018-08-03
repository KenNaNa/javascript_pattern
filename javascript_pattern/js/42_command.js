class Receiver{
	exec(){
		console.log("执行");
	}
}


class Command{
	constructor(rece){
		this.rece = rece;
	}
	cmd(){
		console.log("执行命令");
		this.receiver.exec()
	}
}

class Invoker{
	constructor(cmd){
		this.cmd = cmd;
	}
	invoke(){
		console.log("开始");
		this.cmd.cmd();
	}
}

let s = new Receiver()
let t = new Command(s)
let g = new Invoker(t)

