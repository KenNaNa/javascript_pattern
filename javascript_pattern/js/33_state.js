class State{
	constructor(color){
		this.color = color;
	}
	handler(context){
		console.log(`return to ${this.color} light`)
		context.setState(this);
	}
}

class Context{
	construtor(){
		this.state = null;
	}
	getState(){
		return this.state;
	}
	setState(state){
		this.state = state;
	}
}

let context = new Context();
let green = new State("green");
let yellow = new State("yellow");
let red = new State("red");

green.handler(context)
yellow.handler(context)
red.handler(context)
