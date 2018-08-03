class Product{
	constructor(name){
		this.name = name;
	}

	init(){
		console.log("init")
	}
	fn1(){
		console.log("fn")
	}
	fn2(){
		console.log("fn2")
	}
}

// 工厂模式
class Creater{
	create(name){
		return new Product(name);
	}
}

let creater = new Creater()

let p = creater.create("p1")

p.init()
p.fn1()
p.fn2()