class MyPromise{
	constructor(fn){
		this.successList = [];
		this.failList = []; 
		fn(function(){

		},function(){

		})
	}

	then(successFn,failFn){
		this.successList.push(successFn);
		this.failList.push(failList);
	}
}



















