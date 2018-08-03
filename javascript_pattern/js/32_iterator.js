function each(data){
	for(let item of data){
		console.log(item)
	}
}

let arr = [1,2,4,5,6,7,8];
let nodeList = document.getElementsByTagName('p');
let m = new Map()
m.set('a',100)
m.set('b',100)
each(arr)

each(m)

each(nodeList)