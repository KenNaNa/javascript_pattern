function log(target,name,descripter){
	let oldValue = descripter.value;
	descripter.value = function(){
		console.log("calling ${name} with ${arguments}",arguments);
		return oldValue.apply(this,arguments);
	}
	return descripter;
}
class Math{
	@log
	add(a,b){
		return a + b
	}
}

let math = new Math()
const result = math.add(2,4)
console.log("result",result);