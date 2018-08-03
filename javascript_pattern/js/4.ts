// 父类
class People{
	name 
	age
	protected weight
	constructor(name,age){
		this.name = name;
		this.age = age;
		this.weight = 120
	}
	eat(){
		console.log(`${this.name}`);
	}
	speak(){
		console.log(`My name is ${this.name} My age is ${this.age}`);
	}
}

// 子类继承父类
class Student extends People{
	number 
	private girlFriend
	constructor(name,age,number){
		super(name,age)
		this.number = number
		this.girlFriend = "xxx"
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