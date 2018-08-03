function loadImg(src){
	let promise = new Promise((resolve,reject)=>{
		let img = document.createElement('img')
		img.onload = function(){
			resolve(img)
		}
		img.onerror = function(){
			reject("图片加载失败")
		}
		img.src = src

		document.body.appendChild(img)

	})
	return promise
}

let src="../js/img/1.png"
let result = loadImg(src)

result.then((img)=>{
	console.log(`width is ${img.width}`)
	return img
}).then((img)=>{
	console.log(`height is ${img.height}`)
	return img
}).catch(e=>{
	throw e
})
