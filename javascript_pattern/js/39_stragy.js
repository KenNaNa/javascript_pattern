class OrdinaryUser{
	buy(){
		console.log("OrdinaryUser")
	}
}

class MemberUser{
	buy(){
		console.log("MemberUser")
	}
}


class VIPUser{
	buy(){
		console.log("VIPUser")
	}
}

class User{
	constructor(type){
		this.type = type 
	}
	buy(){
		if(this.type==="ordinary"){
			console.log("putongyonghu");
		}else if(this.type==="memery"){
			console.log("huiyuanyonghu")
		}else if(this.type==="VIP"){
			console.log("VIPyonghu");
		}
	}
}