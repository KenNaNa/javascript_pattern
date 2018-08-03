class Person{
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

let p1 = new Person("Ken",10)
let p2 = new Person("ken",18)

p1.eat()
p1.speak()

p2.eat()
p2.speak()