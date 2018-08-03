// 父类
class People{
	constructor(name){
		this.name = name;
	}
	eat(){
		console.log(`${this.name}`);
	}
	speak(){
		console.log(`My name is ${this.name}`);
	}
}

// 子类继承父类
class A extends People{
	constructor(name,age,number){
		super(name)
	}
	study(){
		console.log(`${this.name} study`)
	}
}

class B extends People{
	constructor(name,age,number){
		super(name)
	}
	study(){
		console.log(`${this.name} study`)
	}
}
let p1 = new A("Ken")
let p2 = new B("ken")

p1.eat()
p1.speak()
p1.study()

p2.eat()
p2.speak()
p2.study()