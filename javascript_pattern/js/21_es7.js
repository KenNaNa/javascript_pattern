import { readonly } from "core-decorators"

class Person{
	@readonly
	name(){
		return "zhangsan"
	}
}

let p = new Person()
console.log(p.name)