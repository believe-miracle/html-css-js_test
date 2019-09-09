//得到画布
var canvas = document.getElementById("canvas");
canvas.width = 1200;
canvas.height = 600;
canvas.style.border = "1px solid #000";
//得到按钮
var btn = document.getElementById("action");
//定义定时器
var timer;
//点击按钮调用的事件
btn.onclick = function() {
	clearInterval(timer);
	//生成随机的颜色
	var color = randomColor();
	//获取画笔
	var ctx = canvas.getContext("2d");
	//生成随机的x坐标 y坐标 半径
	var x = randomNum(200, 1000);
	var y = randomNum(200, 400);
	var r = randomNum(10, 200);
	var index = 0;
	//开始弧度
	var startAng = 0;

	//设置阴影 模糊程度 颜色 x偏移量 y偏移量
	ctx.shadowBlur = 0;
	ctx.shadowColor = "#000";
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = "1px";
	//结束的弧度	
	timer = setInterval(function() {
		if (index == 360) {
			clearInterval(timer);
		}
		index++;
		//绘圆
		ctx.beginPath();
		var endAng = index * Math.PI / 180;
		//边框颜色
		ctx.strokeStyle = color;
		ctx.lineWidth = 1 //线条宽度
		ctx.arc(x, y, r, startAng, endAng);
		ctx.stroke();
		ctx.closePath();
		//把上次绘制的弧度保存下来成为开始的弧度
		startAng = endAng;
	}, 2)

}
//根据范围生成随机数的方法
function randomNum(min, max) {
	return min + Math.round(Math.random() * (max - min));
}
//生成随机颜色的方法 返回是字符串 rgb(255,255,255)
function randomColor() {
	var r = randomNum(100, 250);
	var g = randomNum(100, 250);
	var b = randomNum(100, 250);
	var a = Math.random();
	return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
