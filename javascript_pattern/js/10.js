class Car{
	constructor(num){
		this.num = num;
	}
}

class Floor{
	constructor(index,places=[]){
		this.index = index;
		this.places = places;
	}
	emptyPlaceNum(){
		let num=0;
		this.places.forEach(p=>{
			if(p.empty){
				num = num + 1;
			}
		})

		return num;
	}
}

class Place{
	constructor(){
		this.empty = true;
	}
	in(){
		this.empty = false;
	}
	out(){
		this.empty = true;
	}
}

class Camera{
	shot(car){
		return {
			num: car.nam,
			inTime:Date.now()
		}
	}
}

class Screen{
	show(car,inTime){
		console.log("车牌号为",car.num);
		console.log("停车时间",Date.now() - inTime);
	}
}

class Park{
	constructor(floors = []){
		this.floors = floors
		this.carList = {}
		this.camera = new Camera();
		this.screen = new Screen();

	}
	in(car){
		const info = this.camera.shot(car);
		const i = parseInt(Math.random()*100%100)
		const place = this.floors[i].places[i];
		place.in()
		info.place = place;

		this.carList[car.num] = info;
	}
	out(car){
		const info = this.carList[car.num];
		const place = info.place;
		place.out();
		this.screen.show(car,info.inTime)

		delete this.carList[car.num]
	}
	emptyNum(){
		return this.floors.map(floor=>{
			return `${floor.index} 层还有${floor.emptyPlaceNum()}`
		}).join('\n');
	}

}



