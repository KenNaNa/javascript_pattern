let proto = {
	getName(){
		return this.first + '' + this.last;
	}
	say(){
		console.log("hallo");
	}
}


let o = Object.create(proto)
o.first = "A"
o.last = "B"
console.log(o.getName())