//得到画布
var canvas = document.getElementById("canvas");
canvas.width = 200;
canvas.height = 80;
canvas.style.border = "1px solid #000";
//素材准备
var arr = "abcdefghijklmnopqrstuvwsyz1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
//拿到画笔
var ctx = canvas.getContext("2d");
//根据范围生成随机数的方法
function randomNum(min, max) {
	return min + Math.round(Math.random() * (max - min));
}
//旋转的度数
var ange = 0;
//保存随机拿到的验证码
var code = "";
//生成随机颜色的方法 返回是字符串 rgb(255,255,255)
function randomColor(min,max) {
	var r = randomNum(min,max);
	var g = randomNum(min,max);
	var b = randomNum(min,max);
	return "rgb(" + r + "," + g + "," + b +")";
}
//原始调用第一次
drawCode();

function drawCode(){
	//先写个背景
	//绘制背景色
	ctx.fillStyle = randomColor(160,230);
	ctx.fillRect(0,0,200,100);
	//绘制背景
	// var img = new Image();
	// img.src = "img/1.jpg";
	// img.onload = function(){
	// 	ctx.drawImage(img,0,0);
	// }
	//绘制文字 表示绘制5个文字
	for(var i=0;i<5;i++){
		code = "";
		ange = randomNum(-20,20)*Math.PI/180;
		var x = randomNum(i*200/5+20,(i+1)*200/5-20);
		var y = randomNum(50, 70);
		ctx.fillStyle = randomColor(0,120);
		//字体大小随机 12-30
		ctx.font = randomNum(16,36) + "px 微软雅黑";
		var txt = arr.charAt(randomNum(0,arr.length));
		ctx.rotate(ange);
		ctx.fillText(txt,x,y);
		ctx.rotate(-ange);
	}		
	//绘制线
	for(var i=0;i<20;i++){
		var x = randomNum(10,200-10);
		var y = randomNum(10, 100-10);
		ctx.strokeStyle = randomColor();
		//随机绘制线
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(randomNum(0,200),randomNum(0, 100));
		ctx.stroke();
		ctx.closePath();
	}
	//绘制点
	for(var i=0;i<20;i++){
		ctx.beginPath();
		var x = randomNum(10,200-10);
		var y = randomNum(10,100-10);
		ctx.fillStyle = randomColor(80,100);
		ctx.arc(x,y,1,0,Math.PI*2);
		ctx.fill();
		ctx.closePath();
	}
}
canvas.onclick = function(){
	//把先前的清除掉
	ctx.clearRect(0,0,200,100);
	//重新绘制
	drawCode();
}

//光标移出事件
$("#inputCode").blur(function(){
	v = $(this).val();
	if(v == code){
		alert("输入验证码正确");
	}else{
		alert("输入验证码错误");
	}
})