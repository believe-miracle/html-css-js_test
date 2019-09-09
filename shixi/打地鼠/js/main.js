//记录上一个位置
var lastIndex=0;
//拿到开始的按钮
var startBtn = document.getElementsByClassName("action")[0];
//点击开始按钮开始游戏
startBtn.onclick = function(){
	//你要做的操作 随机生成地鼠的位置
	//当到达一定时间会自动改变位置 再次生成地鼠的位置
	setInterval("randomPosition()",1000);
	
}
var main = document.querySelector(".main");
//改变图片位置的方法
function randomPosition(){
	//round 四舍五入
	var randomIndex = Math.round(Math.random()*8);
	
	//拿到main盒子下面的所有image元素
	//改变随机拿到的图片的src
	var images = document.querySelectorAll(".main>img");
	// if(main.children.src == "img/2.gif"){
	// 	main.children.src = "img/5.jpg";
	// }
	// for (var i=0;i<images.length;i++) {
	// 	images[i].src == "img/5.jpg";
	// }
	images[randomIndex].src = "img/2.gif";
	if(lastIndex != randomIndex){
		images[lastIndex].src = "img/5.jpg";
	}
	//记录值
	lastIndex = randomIndex;
}

var images = document.querySelectorAll(".main>img");
var number = 0;
for (var i=0; i<images.length;i++) {
	images[i].onclick = function(){
		//substring(,) 
		if(this.src.substring(this.src.length-5,this.src.length-4) == "2"){
			number++;
			document.querySelector(".result>span").innerHTML = number;
		}	
	}
}