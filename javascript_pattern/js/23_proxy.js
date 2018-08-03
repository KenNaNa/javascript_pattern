class RealImg{
	constructor(filename){
		this.filename = filename;
		this.loadFromDisk()
	}
	loadFromDisk(){
		console.log("loading..."+this.filename)
	}
	display(){
		console.log("displaying..."+this.filename)
	}
}


class ProxyImg{
	constructor(filename){
		this.realImg = new RealImg(filename);
	}
	display(){
		this.realImg.display();
	}
}

let proxyimg = new ProxyImg('../js/img/100.png');
proxyimg.display()