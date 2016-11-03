window.onload = function() {
	var contain = document.getElementById("contain");
	var list = document.getElementById("list");
	var btn = document.getElementById("btn").getElementsByTagName("li");
	var pre = document.getElementById("pre");
	var next = document.getElementById("next");
	var index = 1;
	var animated = false;
	var timer;
	//两小圆点功能
	function showBtn() {
		for(var i = 0; i < btn.length; i++) {
			if(btn[i].className == 'on') {
				btn[i].className = '';
				break;
			}
		}
		btn[index - 1].className = "on"; //点击一下按钮亮起来
	}
	//箭头点击轮播
	function animate(offset) { //地归
		animated = true;
		var newLeft = parseInt(list.style.left) + offset;
		var time = 1000; //位移总的时间
		var interval = 10; //位移间隔时间
		var speed = offset / (time / interval); //每次位移量
		function go() {
			if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(go, interval); //定时器,只执行一次
			} else {
				animated = false;
				list.style.left = newLeft + 'px';
				if(newLeft > -1000) {
					list.style.left = -5000 + 'px';
				}
				if(newLeft < -5000) {
					list.style.left = -1000 + 'px';
				}
			}
		}
		go();
	}
	//轮播图自动播放
	function play() {
		timer = setInterval(function() {
			next.onclick();
		}, 3000);
	}
	//鼠标移动上轮播终止
	function stop() {
		clearInterval(timer);
	}
	//点击按钮触发的事件
	next.onclick = function() {
		if(index == 5) { //如果按钮点到第五个按钮就让他回到第一个按钮

			index = 1;
		} else { //否则让它index自动加一
			index += 1;
		}

		showBtn();
		if(animated == false) {
			animate(1000);
		}

	}
	pre.onclick = function() {
			index -= 1;
			showBtn();
			if(animated == false) {
				animate(-1000);
			}

		}
		//给按钮添加点击事件
	for(var i = 0; i < btn.length; i++) {
		btn[i].onclick = function() {
			if(this.className == 'on') {
				return; //如果执行到这里就停止
			}
			var myIndex = parseInt(this.getAttribute('index')); //获取自定义属性的值
			//alert(parseInt( this.getAttribute('index') ));
			var offset = -1000 * (myIndex - index);
			animate(offset);
			index = myIndex;
			showBtn();
		}
	}
	contain.onmouseover = stop;
	contain.onmouseout = play;
	play();
}