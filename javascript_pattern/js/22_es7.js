import { deprecate } from "core-decorators"
class Person{
	@deprecate("提示")
	name(){
		return "zhangsan"
	}
}

let p = new Person()
p.name()