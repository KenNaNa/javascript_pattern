class People{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	eat(){
		console.log(`${this.name}`);
	}
	speak(){
		console.log(`My name is ${this.name} My age is ${this.age}`);
	}
}

class Student extends People{
	constructor(name,age,number){
		super(name,age)
		this.number = number
	}
	study(){
		console.log(`${this.name} study`)
	}
}
let p1 = new Student("Ken",10,10)
let p2 = new Student("ken",18,10)

p1.eat()
p1.speak()
p1.study()

p2.eat()
p2.speak()
p2.study()