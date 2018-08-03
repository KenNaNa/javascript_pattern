// 父类
class People{
	constructor(name,house){
		this.name = name;
		this.house = house;
	}
	syaSomething(){
		
	}
	
}

class House{
	constructor(city){
		this.city = city;
	}
	showCity(){
		
	}
}

// 子类继承父类
class A extends People{
	constructor(name,house){
		super(name,house)
	}
	syaSomething(){
		console.log("A")
	}
}

class B extends People{
	constructor(name,age,number){
		super(name)
	}
	syaSomething(){
		console.log("B")
	}
}
