class LoginForm{
	constructor(){
		this.state = "hide"
	}
	show(){
		if(this.state==='show'){
			console.log("已经显示");
			return 
		}
		this.state = "show"
		console.log("登录框显示");
	}
	hide(){
		if(this.state==='hide'){
			console.log("已经影藏");
			return ;
		}
		this.state = 'hide';
		console.log("登录框隐藏成功");
	}
}

LoginForm.getInstance = (function(){
	let instance=null;
	return function(){
		if(!instance){
			instance = new LoginForm()
		}
		return instance;
	}
})()


let login1 = LoginForm.getInstance();
login1.show();


let login2 = LoginForm.getInstance();
login2.hide()

console.log(login1===login2)