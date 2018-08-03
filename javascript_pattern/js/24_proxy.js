let star = {
	name:"Ken",
	age:18,
	phone:'xxx',
}


let agent = new Proxy(star,{
	get:function(target,key){
		if(key === 'phone'){
			return "aaa"
		}
		if(key === 'price'){
			return 120000
		}

		return target[key]
	},
	set:function(target,key,val){
		if(key==="customPrice"){
			if(val<100000){
				throw new Error("价格太低");
			}else{
				target[key] = val;

				return true
			}
		}

	}
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)