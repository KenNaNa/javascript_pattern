class Car{
	constructor(name,number){
		this.name = name;
		this.number = number;
	}
}

class FastCar extends Car{
	constructor(name,number,price){
		super(name,number);
		this.price = price;
	}
}

class SlowCar extends Car{
	constructor(name,number,price){
		super(name,number);
		this.price = price;
	}
}

class Trip{
	constructor(car){
		this.car = car;
	}
	start(){
		console.log(`行程开始显示${this.price}`);
	}
	end(){
		console.log(`行程结束时显示${this.price}`);
	}
}

let f = new FastCar("F",100);
let s = new SlowCar("S",110);

let t = new Trip(f)

t.start()
t.end()