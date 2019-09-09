//box的宽高要是浏览器的宽高
//获取浏览器的宽高 innerWidth;innerHeight;
var CW = window.innerWidth;
var CH = window.innerHeight;
var box = document.getElementById("box");
box.style.width = CW + "px";
box.style.height = CH + "px";
//拿到当前的时间
var now = new Date;
//获取当前的月份
var month = now.getMonth() + 1;
//获取当前天数
var day = now.getDate();
//获取小时
var hours = now.getHours();
//获取分钟
var minutes = now.getMinutes();
//获取秒
var seconds = now.getSeconds();
//拿到当前的时间
window.onload = function() {

	var maxDay;
	//判断当前月最大天数
	switch (month) {
		case 1: case 3: case 5: case 7: case 8: case 10: case 12:			
			maxDay = 31;
			break;
		case 2:
			maxDay = 28;
			break;
		case 4: case 6: case 9: case 11:
			maxDay = 20;
			break;
	}
	//把月日天时分秒 对应的盒子创建出来
	createElement(12,"月",month);
	createElement(maxDay,"日",day);
	createElement(24,"时",hours);
	createElement(60,"分",minutes);
	createElement(60,"秒",seconds);
	
	setInterval(function(){
		now = new Date;
		month = now.getMonth() + 1;
		//获取当前天数
		day = now.getDate();
		//获取小时
		hours = now.getHours();
		//获取分钟
		minutes = now.getMinutes();
		//获取秒
		seconds = now.getSeconds();
		initStyle(month+"月",day+"日",hours+"时",minutes+"分",seconds+"秒");
		positionBlock();
	},1000)
	

}

//声明方法 创建元素的
function createElement(number, unit,nowNumber) {
	for (var i = 1; i <=number; i++) {
		var ele = document.createElement("div");
		ele.setAttribute("class", "block");
		if(i==60){
			ele.innerText = 0 + unit;
		}else{
			ele.innerText = i + unit;
		}
		box.appendChild(ele);
	}
}

var blocks = document.getElementsByClassName("block");
//初始化样式的
 function initStyle(M,D,H,min,S){
	for (var i=0;i<blocks.length;i++) {
		blocks[i].style.color = "rgb(77,77,77)";
		if (blocks[i].innerText==M || blocks[i].innerText==D || blocks[i].innerText==H
			|| blocks[i].innerText==min || blocks[i].innerText==S) {
				blocks[i].style.color = "rgb(250,250,250)";
		}
	}
 }
 
 //定位
 function positionBlock(){
	 
	//离中心点的距离
	//var r ;
	//旋转的度数
	//var deg;
	//设置所有的block元素绝对定位
	for (var i=0;i<blocks.length;i++){
		blocks[i].style.position = "absolute";
		if(i<12){
			rotateBlock(50,12,0,month-1);
		}else if(i>=12 && i<43){
			rotateBlock(120,31,12,day-1);
		}else if(i>=43 && i<67){
			rotateBlock(190,24,43,hours-1);
		}else if(i>=67 && i<127){
			rotateBlock(260,60,67,minutes-1);
		}else if(i>=127 && i<187){
			rotateBlock(330,60,127,seconds-1);
		}
	}
	
 }
 function rotateBlock(r,count,sum,data1){
	//先拿到中心点 拿到元素在窗口的占用的宽度
	var centerX = document.getElementsByTagName("body")[0].clientWidth/2;
	var centerY = document.getElementsByTagName("body")[0].clientHeight/2;
	for (var i=0;i<count;i++){
		deg = 360/count;
		var leftNum = centerX+Math.cos(Math.PI/180*i*deg)*r+"px";
		var topNum = centerY+Math.sin(Math.PI/180*i*deg)*r+"px";

		if(i+data1>=count){
			blocks[i+data1-count+sum].style.left = leftNum;
			blocks[i+data1-count+sum].style.top = topNum;
			blocks[i+data1-count+sum].style.transform = "rotate("+deg*i+"deg)";
		}else{
			blocks[i+data1+sum].style.left = leftNum;
			blocks[i+data1+sum].style.top = topNum;
			blocks[i+data1+sum].style.transform = "rotate("+deg*i+"deg)";
		}
	
	}
	
 }