function radonly(target,name,descripter){
	descripter.writable = false;
	return descripter;
}
class Person{
	constructor(){
		this.first = "A"
		this.last = "B"
	}
	@readonly
	name(){
		return "name"
	}
}

let p = new Person()
console.log(p.name)

p.name = "Ken";