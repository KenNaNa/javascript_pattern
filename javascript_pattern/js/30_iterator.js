function each(data){
	let iterator = data[Symbol.iterator]()
	console.log(iterator.next())
	console.log(iterator.next())
	console.log(iterator.next())
	console.log(iterator.next())
	console.log(iterator.next())
	console.log(iterator.next())
	console.log(iterator.next())
}

let arr = [1,2,4,5,6,7,8];
let nodeList = document.getElementsByTagName('p');
let m = new Map()
m.set('a',100)
m.set('b',100)
each(arr)