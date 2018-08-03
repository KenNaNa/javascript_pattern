function minxins(...list){
	return function (target){
		Object.assign(target.prototype,...list)
	}
}

const Foo = {
	foo(){
		console.log("foo");
	}
}

@minxins(Foo)
class MyClass{

}

let obj = new MyClass()
obj.foo()