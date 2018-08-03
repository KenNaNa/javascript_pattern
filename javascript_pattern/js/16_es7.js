
class Demo{
	@testDec
}

function testDec(target){
	target.isDec = true;
}

console.log(Demo.isDec)