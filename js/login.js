//验证用户名
function checkUserName(){
	var userName=document.getElementById("userName");//获取元素方式一
	if(userName.value.length==0){
		alert("用户名不能为空");
		return false;
	}
	if(userName.value.length<3||userName.value.length>10){
		alert(用户名的长度应该介于3到16位之间,请重新输入);
		username.select();//元素内容被选中
		return false;
	} 
	return true;
	
}
//验证密码
function checkPwd(){
	//获取元素方式二
	var userPwd=document.getElementById("userPwd").value;
	if(userPwd.length<6){
		alert("密码长度不能低于6位");	
		return false;
	}
	for(var i=0;i<userPwd.length;i++){
		var tmp=userPwd.charAt(i);
		if(isNaN(tmp)){
		alert("密码必须使用数字");	
		return false;
		}
	}
	return true;
}
function checkForm(){
		return	checkUserName()&&checkPwd();
		
	}
