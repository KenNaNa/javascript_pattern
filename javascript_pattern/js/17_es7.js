function testDec(isDec){
	return function(target){
		target.isDec = isDec;
	}
}

@testDec
class Demo{

}

console.log(Demo.isDec)