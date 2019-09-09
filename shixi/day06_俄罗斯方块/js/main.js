//新建二维数组用来表示table的坐标的 x坐标是第一层的数组 y坐标是第二层的数组
var arrs;
//数组中有三种状态 墙1 空白0 图形2
//行
init();
function init(){
	arrs = new Array();
	for (var i = 0; i < 24; i++) {
	arrs[i] = new Array();
	//列
	for (var j = 0; j < 14; j++) {
		//当是第一行或者是最后一行或者是第一列或者是最后一列 为墙赋值为1
		if (i == 0 || i == 23 || j == 0 || j == 13) {
			arrs[i][j] = 1;
		}
	}
}
}

//先拿到所有的单元格 数组
var tds = document.getElementsByTagName("td");
//控制难度的时间
datatime = 500;
//随机生成颜色的方法
function randomColor(){
	var r,g,b;
	r=Math.floor(Math.random()*166+90);
	g=Math.floor(Math.random()*166+90);
	b=Math.floor(Math.random()*166+90);
	return "rgba("+r+","+g+","+b+",1)"
}
//绘图的方法
function draw() {
	//先遍历二维数组
	for (var i = 0; i < arrs.length; i++) {
		for (var j = 0; j < arrs[i].length; j++) {
			//当二维数组里面的值是1 为墙
			if (arrs[i][j] == 1) {
				//设置墙的背景为红色 js
				tds[i * 14 + j].style.background = "blue";
				//jQuery中的$("td")是拿到的第一个td元素
				//$("td")[i * 14 + j].css("background", "red"); 不起作用 拿到的不是数组
				//当值为0 为空白 设置为白色
			} else if (arrs[i][j] == 0) {
				tds[i * 14 + j].style.background = "none";
				//$("td")[i * 14 + j].css("background", "white");
				//当值为2 设置为蓝色
			} else if (arrs[i][j] == 2) {
				// tds[i * 14 + j].style.background = randomColor();
				 tds[i * 14 + j].style.background = "red";
				//$("td")[i * 14 + j].css("background", "blue");
			}
		}
	}
}
//初始的块
var squArr = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
//定义一个二维数组用来保存随机生成的块的坐标 移动的块
var target = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
//随机数变量
var index;
// console.log(squArr)
//随机生成图形的方法 需要根据你传过来的值来生成不一样的图形
function randomBlock() {
	//初始化初值
	squArr = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
	//生成图形 Math.floor向下取整 Math.random生成随机数0-1不包含1 
	index = Math.floor(Math.random() * 5);
	
	//根据随机生成的数进行判断
	// switch(index){
	// 	case 0:
	// 		// 田字形
	// 		// arrs[1][6] = 2;
	// 		// arrs[1][7] = 2;
	// 		// arrs[2][6] = 2;
	// 		// arrs[2][7] = 2;
	// 		squArr = [[1,6],[1,7],[2,6],[2,7]];
	// 		// for (var i = 0; i < squArr.length; i++) {
	// 		// 	arrs[squArr[i][0]][squArr[i][1]] = 2;
	// 		// }
	// 		break;
	// 	case 1:
	// 		// 一字形
	// 		// arrs[1][5] = 2;
	// 		// arrs[1][6] = 2;
	// 		// arrs[1][7] = 2;
	// 		// arrs[1][8] = 2;
	// 		// for (var i = 5; i <= 8; i++) {
	// 		// 	arrs[1][i] = 2;
	// 		// }
	// 		squArr = [[1][5],[1][6],[1][7],[1][8]];
	// 		break;
	// 	case 2:
	// 		// T字形
	// 		// arrs[1][6] = 2;
	// 		// arrs[1][7] = 2;
	// 		// arrs[2][7] = 2;
	// 		// arrs[3][7] = 2;
	// 		squArr = [[1][6],[1][7],[2][7],[3][7]];
	// 		break;
	// 	case 3:
	// 		// |-字形
	// 		// arrs[1][6] = 2;
	// 		// arrs[2][6] = 2;
	// 		// arrs[3][6] = 2;
	// 		// arrs[2][7] = 2;
	// 		squArr = [[1][6],[2][6],[3][6],[2][7]];
	// 		break;
	// 	case 4:
	// 		// z字形
	// 		// arrs[1][6] = 2;
	// 		// arrs[1][7] = 2;
	// 		// arrs[2][7] = 2;
	// 		// arrs[2][8] = 2;
	// 		squArr = [[1][6],[1][7],[2][7],[2][8]];
	// 		break;
	// 		
	// }
		switch(index){
		case 0:
		//田字形
		//arrs[1][6]=2;
		//arrs[1][7]=2;
		//arrs[2][6]=2;
		//arrs[2][7]=2;
		squArr = [[1,6],[1,7],[2,6],[2,7]];
		Chgcount = 0;
		break;
		case 1:
		//一字型
//		for(var i=5;i<=8;i++){
//			arrs[1][i]=2;
//		}
		squArr = [[1,5],[1,6],[1,7],[1,8]];
		Chgcount = 0;
		break;
		case 2:
		//7字形
//		arrs[1][6]=2;
//		arrs[1][7]=2;
//		arrs[2][7]=2;
//		arrs[3][7]=2;
		squArr = [[1,6],[1,7],[2,7],[3,7]];
		Chgcount = 0;
		break;
		case 3:
		//   |-型
//		arrs[1][6]=2;
//		arrs[2][6]=2;
//		arrs[3][6]=2;
//		arrs[2][7]=2;
		squArr = [[1,6],[2,6],[3,6],[2,7]];
		Chgcount = 0;
		break;
		case 4:
		//z字形
//		arrs[1][6]=2;
//		arrs[1][7]=2;
//		arrs[2][7]=2;
//		arrs[2][8]=2;
		squArr = [[1,6],[1,7],[2,7],[2,8]];
		Chgcount = 0;
		break;
	}
}
//给块赋值的方法
function block() {
	for (var i = 0; i < squArr.length; i++) {
		arrs[squArr[i][0]][squArr[i][1]] = 2;
	}
	//重绘
	draw();
}
//隐藏原来的块
function hidden() {
	//遍历squArr
	//把原来的块隐藏
	for (var i = 0; i < squArr.length; i++) {
		//原本的块隐藏
		// console.log(squArr[i][0]+","+squArr[i][1])
		arrs[squArr[i][0]][squArr[i][1]] = 0;
	}

}
//移动给对应坐标
function move(direction) {
	for (var i = 0; i < squArr.length; i++) {
		if (direction == "down") {
			target[i] = [squArr[i][0] + 1, squArr[i][1]];
		} else if (direction == "left") {
			target[i] = [squArr[i][0], squArr[i][1] - 1];
		} else if (direction == "right") {
			target[i] = [squArr[i][0], squArr[i][1] + 1];
		} else if (direction == "up") {
			//形状变化 给移动的数组赋变形后的值
			change();
			//判断是否能移动 能移动则把移动完数组的值赋给squarr
			if(canMove()){
				squArr = target;
				//绘出来
				block();
			}
		}
	}
}

//拿到显示分数的盒子
var scoreBox = document.getElementById("score");
//显示的分数值
var score = 0;
//消除的方法
function clear(){
	//遍历整个数组
	for(var i=22;i>=1;i--){
		var isClear = true;
		for(var j=12;j>=1;j--){
			if(arrs[i][j] != 2){
				isClear = false;
				break;
			}
		}
		 if(isClear){
			 score += 10;
			 //显示分数
			 scoreBox.innerText = score;
			 //当分数大于100 难道增加
			 if(score>=50){
				 datatime = 200;
			 }
			 for(var k=i;k>1;k--){
				for(var j=12;j>=1;j--){
					arrs[k][j] = arrs[k-1][j];
					draw();
				}
			 }
			i++;
		 }
		// if(isClear == true){
		// 	for(var j=0;j<arrs[i].length;j++){
		// 		arrs[i][j] = 0;
		// 		draw();
		// 	}
		// 	
		// }
	}
		
	//draw();
}
//形状变化的方法
//定义一个变量来记录变化的次数
var Chgcount;
function change(){
	//根据块的坐标发生改变的	squArr来发生改变 target来保存改变完的坐标
	//隐藏原来的坐标
	hidden();
	//改变位置 根据随机数生成的图形来变化
	switch(index){
		case 0:
		//田字形 不需要改变
			//target = squArr;
			break;
		case 1:
		//一字形 第一个点是不会改变的 根据第一点来变化
		//squArr = [[1,5],[1,6],[1,7],[1,8]];
			// target[0][0] = squArr[0][0]+0;
			// target[0][1] = squArr[0][1]-0;
			// target[1][0] = squArr[1][0]+1;
			// target[1][1] = squArr[1][1]-1;
			// target[2][0] = squArr[2][0]+2;
			// target[2][1] = squArr[2][1]-2;
			// target[3][0] = squArr[3][0]+3;
			// target[3][1] = squArr[3][1]-3;
		if(Chgcount%2){
				//当为真的时候 值为1的时候变横条 否则变竖条
				//隐藏开始的位置
				hidden();
				//给变化后的位置赋值
				for(var i=0;i<4;i++){
					target[i][0] =squArr[0][0];
					target[i][1] =squArr[0][1]+i;
				}
					
			}else{
					//隐藏开始的位置
				hidden();
					//给变化后的位置赋值
				for(var i=0;i<4;i++){
					target[i][0] =squArr[0][0]+i;
					target[i][1] =squArr[0][1];
					}
			}
			break;
		case 2:
		//7字形 有四种形态
		//squArr = [[1,6],[1,7],[2,7],[3,7]];
			switch(Chgcount%4){
					case 0:
					hidden();
					target[0][0] = squArr[2][0]-1;
					target[0][1] = squArr[2][1]+1;
					target[1][0] = squArr[2][0];
					target[1][1] = squArr[2][1]+1;
					target[2][0] = squArr[2][0];
					target[2][1] = squArr[2][1];
					target[3][0] = squArr[2][0];
					target[3][1] = squArr[2][1]-1;
					break;
					case 1:
					hidden();
					target[0][0] = squArr[2][0]+1;
					target[0][1] = squArr[2][1]+1;
					target[1][0] = squArr[2][0]+1;
					target[1][1] = squArr[2][1];
					target[2][0] = squArr[2][0];
					target[2][1] = squArr[2][1];
					target[3][0] = squArr[2][0]-1;
					target[3][1] = squArr[2][1];
					break;
					case 2:
					hidden();
					target[0][0] = squArr[2][0]+1;
					target[0][1] = squArr[2][1]-1;
					target[1][0] = squArr[2][0];
					target[1][1] = squArr[2][1]-1;
					target[2][0] = squArr[2][0];
					target[2][1] = squArr[2][1];
					target[3][0] = squArr[2][0];
					target[3][1] = squArr[2][1]+1;
					break;
					case 3:
					hidden();
					target[0][0] = squArr[2][0]-1;
					target[0][1] = squArr[2][1]-1;
					target[1][0] = squArr[2][0]-1;
					target[1][1] = squArr[2][1];
					target[2][0] = squArr[2][0];
					target[2][1] = squArr[2][1];
					target[3][0] = squArr[2][0]+1;
					target[3][1] = squArr[2][1];
					break;
				}
			break;
		case 3:
		// |-字形
		//squArr = [[1,6],[2,6],[3,6],[2,7]];
			switch(Chgcount%4){
			case 0:
					hidden();
					target[0][0] = squArr[1][0];
					target[0][1] = squArr[1][1]+1;
					target[1][0] = squArr[1][0];
					target[1][1] = squArr[1][1];
					target[2][0] = squArr[1][0];
					target[2][1] = squArr[1][1]-1;
					target[3][0] = squArr[1][0]+1;
					target[3][1] = squArr[1][1];
					break;
					case 1:
					hidden();
					target[0][0] = squArr[1][0]-1;
					target[0][1] = squArr[1][1];
					target[1][0] = squArr[1][0];
					target[1][1] = squArr[1][1];
					target[2][0] = squArr[1][0]+1;
					target[2][1] = squArr[1][1];
					target[3][0] = squArr[1][0];
					target[3][1] = squArr[1][1]-1;
					break;
					case 2:
					hidden();
					target[0][0] = squArr[1][0];
					target[0][1] = squArr[1][1]+1;
					target[1][0] = squArr[1][0];
					target[1][1] = squArr[1][1];
					target[2][0] = squArr[1][0];
					target[2][1] = squArr[1][1]-1;
					target[3][0] = squArr[1][0]-1;
					target[3][1] = squArr[1][1];
					break;
					case 3:
					hidden();
					target[0][0] = squArr[1][0]-1;
					target[0][1] = squArr[1][1];
					target[1][0] = squArr[1][0];
					target[1][1] = squArr[1][1];
					target[2][0] = squArr[1][0]+1;
					target[2][1] = squArr[1][1];
					target[3][0] = squArr[1][0];
					target[3][1] = squArr[1][1]+1;
					break;
			}
			break;
		case 4:
		// z字形
		//squArr = [[1,6],[1,7],[2,7],[2,8]];
			switch(Chgcount%2){
				case 0:
					hidden();
					target[0][0] = squArr[2][0]-1;
					target[0][1] = squArr[2][1]+1;
					target[1][0] = squArr[2][0];
					target[1][1] = squArr[2][1]+1;
					target[2][0] = squArr[2][0];
					target[2][1] = squArr[2][1];
					target[3][0] = squArr[2][0]+1;
					target[3][1] = squArr[2][1];
					break;
				case 1:
					hidden();
					target[0][0] = squArr[2][0]-1;
					target[0][1] = squArr[2][1]-1;
					target[1][0] = squArr[2][0]-1;
					target[1][1] = squArr[2][1];
					target[2][0] = squArr[2][0];
					target[2][1] = squArr[2][1];
					target[3][0] = squArr[2][0];
					target[3][1] = squArr[2][1]+1;
					break;
				}

			break;
	}
}
//自动往下掉的方法
function autoDown() {
	
	//把原本的坐标还原
	target = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
	hidden();
	move("down");
	if (canMove()) {
		squArr = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
		//如果可以移动 那么我的坐标就变成了移动完的坐标
		squArr = target;
	} else {
		//多画一次
		block();
		clear();
		//判断是否gameover
		var isGameOver = false;
		for(var i=0;i<target.length;i++){
			if(target[i][0] == 1 || target[i][0] == 2){
				isGameOver = true;
				break;	
			}
		}
		if(isGameOver){
			alert("Game over");
			if(confirm("是否继续游戏?")){
				isBegin = false;
				isGameOver = false;
				//清除定时器
				 clearInterval(timer);
				 //初始化
				 init();
				//随机生成块
				randomBlock();
				//给块的坐标位置赋值
				// 	console.log(squArr)
				block();
				//重新绘图
				draw();
				timer = setInterval("autoDown()", datatime);
				// 	isBegin = true;
				// } else {
				// 	alert("当前游戏已经开始");
				// }
				
			}
		}
		randomBlock();	
	}
	//赋值
	block();

	//遍历二维数组
	// for (var i = 0; i < arrs.length; i++) {
	// 	for (var j = 0; j < arrs[i].length; j++) {
	// 	}
	// }
}


function canMove() {
	var isCanMove = false;
	//先判断底下是否有东西 遍历移动的坐标 查看移动的坐标上是否值为1或2
	for (var i = 0; i < 4; i++) {
		if (arrs[target[i][0]][target[i][1]] != 1 && arrs[target[i][0]][target[i][1]] != 2) {
			// squArr = [[-1, -1],[-1, -1],[-1, -1],[-1, -1]];
			// //如果可以移动 那么我的坐标就变成了移动完的坐标
			// squArr = target;
			
			isCanMove = true;
		} else {
			return false;
		}
		// if (tds[target[i][0] * 14 + target[i][1]].style.background != "blue" && tds.style.background != "red") {
		// squArr = [[-1, -1],[-1, -1],[-1, -1],[-1, -1]];
		// 	//如果可以移动 那么我的坐标就变成了移动完的坐标
		// 	squArr = target;
	}
	return isCanMove;
}
//调用绘图方法
draw();
//当点击开始的时候执行
$("#action").click(function() {
	if (isBegin == false) {
		console.log(arrs)
		//随机生成块
		randomBlock();
		//给块的坐标位置赋值
		block();
		//重新绘图
		draw();
		timer = setInterval("autoDown()", datatime);
		isBegin = true;
	} else {
		alert("当前游戏已经开始");
	}
})
var count = 0;
//暂停按钮
$("#pause").click(function() {
	// clearInterval(timer);
	// hidden();
	// isBegin = false;
	if (count%2 == 0) {
		$("#pause").text("继续");
		clearInterval(timer);
	} else {
		 timer = setInterval("autoDown()",datatime);
		 $("#pause").text("暂停");
	}
	count++;
})
//是否开始游戏
var isBegin = false;
//定时器设置
var timer;

//由键盘控制移动和变化
//键盘按下事件
window.onkeydown = function(event) {
	//拿到对应的键盘对象
	event = window.event || event;
	target = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
	//拿到键盘上是哪个键
	//得到键盘的ASCII码 event.keyCode
	//alert(event.keyCode);
	switch (event.keyCode) {
		//回车的时候开始游戏
		case 13:
			if (isBegin == false) {
				//随机生成块
				randomBlock();
				//给块的坐标位置赋值
				console.log(squArr)
				block();
				//重新绘图
				draw();
				timer = setInterval("autoDown()", datatime);
				isBegin = true;
			} else {
				alert("当前游戏已经开始");
			}
			break;
			//按左箭头的时候
		case 37:
			console.log("我按了左箭头");
			//把原本的坐标还原
			hidden();
			move("left");
			if (canMove()) {
				squArr = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
				//如果可以移动 那么我的坐标就变成了移动完的坐标
				squArr = target;
			}
			//赋值
			block();
			break;
			//按上箭头的时候	
		case 38:
			Chgcount++;	
			move("up");
			console.log("我按了上箭头");
			break;
			//按右箭头的时候	
		case 39:
			console.log("我按了右箭头");
			//把原本的坐标还原
			hidden();
			move("right");
			if (canMove()) {
				squArr = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
				//如果可以移动 那么我的坐标就变成了移动完的坐标
				squArr = target;
			}
			//赋值
			block();
			break;
			//按下箭头的时候
		case 40:
			//console.log(squArr[3]);
			console.log("我按了下箭头");
			autoDown();
			break;
	}

}
