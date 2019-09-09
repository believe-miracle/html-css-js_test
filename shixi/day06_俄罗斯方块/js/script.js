//新建二维数组表示table的坐标点  x坐标是第一层的数组   y坐标是第二层的数组
var arrs=new Array();
// arrs[i]=new Array();给值
//二维数组中有三种状态  墙1 空白0 图形2
for (var i = 0; i < 24; i++) {
	arrs[i]=new Array();
	for (var j = 0; j < 14; j++) {
		//当时第一行或最后一行或者是第一列或最后一列赋值为1
		if ((i==0)||(i==23)||(j==0)||(j==13)) {
			arrs[i][j]=1
		}
	}
}
//先拿到所有的单元格
var tds=document.getElementsByTagName("td");
//绘图方法
function draw(){
	//先遍历二维数组
	for (var i = 0; i < arrs.length; i++) {
		for (var j = 0; j < arrs[i].length; j++) {
			//当二维数组里面的值是1为墙
			if (arrs[i][j]==1) {
// 				//设置墙的背景为红色
		       tds[i*14+j].style.background="red";//js方法 
			   //jquery中的$("td")是拿到第一个元素 拿到的不是数组
// 				$("td")[i*14+j].css("background","red");//jquery方法
			}
			//当值为0时设置为白色
			else if(arrs[i][j]==0){
				tds[i*14+j].style.background="white";
				// $("td")[i*14+j].css("background","white");//jquery方法
			}
			//当值为2时设置为蓝色
			else if(arrs[i][j]==2){
				tds[i*14+j].style.background="blue";
				// $("td")[i*14+j].css("background","blue");//jquery方法
			}
		}
	}
}
//初始的块的坐标
var squArr=[[-1,-1],[1,-1],[1,-1],[1,-1]];
//定义一个二维数组 用来保存随机生成的坐标 移动的块
var target=[[-1,-1],[1,-1],[1,-1],[1,-1]];
//生成图形的方法  需要根据传过来的值生成不一样的图形
function randomBlock(){
	squArr=[[-1,-1],[1,-1],[1,-1],[1,-1]];//初始化初值
	//生成图形Math.floor向下取整  Math.random()生成随机数0-1不包括0
	var index=Math.floor(Math.random()*5);
	//根据随机生成的数进行判断
	switch (index){
		case 0:
		    //田字形
			/* 
			arrs[1][6]=2;
			arrs[1][7]=2;
			arrs[2][6]=2;
			arrs[2][7]=2;
			*/
			squArr=[[1,6],[1,7],[2,6],[2,7]];
			break;
		case 1:
		   /* //一字形
			arrs[1][5]=2;
			arrs[1][6]=2;
			arrs[1][7]=2;
			arrs[1][8]=2; */
			/* for (var i=5;i<=8;i++){
				arrs[1][i]=2;   
			} */
			 squArr=[[1,5],[1,6],[1,7],[1,8]];
			break;	
		case 2:
		    //7字形
			/* arrs[1][6]=2;
			arrs[1][7]=2;
			arrs[2][7]=2;
			arrs[3][7]=2; */
			squArr=[[1,6],[1,7],[2,7],[3,7]];
			break;	
		case 3:
		    //T字形
			/* arrs[1][6]=2;
			arrs[2][6]=2;
			arrs[2][7]=2;
			arrs[3][6]=2; */
			squArr=[[1,6],[2,6],[2,7],[3,6]];
			break;	
		case 4:
		    //Z字形
			/* arrs[1][6]=2;
			arrs[1][7]=2;
			arrs[2][7]=2;
			arrs[2][8]=2; */
			squArr=[[1,6],[1,7],[2,7],[2,8]];
			break;	
	}
}
//给块赋值的方法
function block(){
	for (var i = 0; i < squArr.length; i++) {
		arrs[squArr[i][0]][squArr[i][1]]=2;
	}
	//重绘
	draw();
}
//隐藏原来的块
function hidden(){
	//把原来的块隐藏
	for (var i = 0; i < squArr.length; i++) {
		arrs[squArr[i][0]][squArr[i][1]]=0;//原本的块隐藏
	}
}
//移动给对应坐标
function move(direction){
	for (var i = 0; i < squArr.length; i++) {
	     if (direction=="down") {
	     	target[i]=[squArr[i][0]+1,squArr[i][1]];//移动的块给对应坐标	
	     } else if(direction=="left"){
	     	target[i]=[squArr[i][0],squArr[i][1]-1];
	     }else if(direction=="right"){
	     	target[i]=[squArr[i][0],squArr[i][1]+1];
	     }else if(direction=="up"){
	     	//形状变化
	     }
	}
}
//自动往下掉的方法
function autoDown(){
	//把原本的坐标还原
	//定义一个二维数组 用来保存随机生成的坐标 移动的块
	target=[[-1,-1],[1,-1],[1,-1],[1,-1]];
	hidden();
	move("down");
	if(canMove()){
		squArr=[[-1,-1],[1,-1],[1,-1],[1,-1]];
		//如果可以移动  坐标就变成了移动完的坐标
		squArr=target;
	}else{
		//多画一遍
		block();
		randomBlock();
	}
	//赋值
	block();
}
function canMove(){
	var iscanMove=false;
	//先判断是否底下有东西 遍历移动的坐标  查看移动的坐标上是否值为1或2
	for (var i = 0; i < 4; i++) {
		if (arrs[target[i][0]][target[i][1]]!=1 && arrs[target[i][0]][target[i][1]]!=2) {
			/* squArr=[[-1,-1],[1,-1],[1,-1],[1,-1]];
			//如果可以移动  坐标就变成了移动完的坐标
			squArr=target; */
			iscanMove=true;
			
		}else{
			return false;
		}
		/* if(tds[target[i][0]*14+target[i][1]].style.background != "red" && tds[target[i][0]*14+target[i][1]].style.background != "white"){
			squArr=[[-1,-1],[1,-1],[1,-1],[1,-1]];
			//如果可以移动  坐标就变成了移动完的坐标
			squArr=target;
		} */
	}
	return iscanMove;
}
//调用绘图的方法
draw();
//当点击开始的时候执行
$("#action").click(function(){
	if(isBegin==false){
		 //随机生成块
		randomBlock();
		//给块的坐标位置赋值
		block();
		/* //重新绘图
		draw(); */
		timer=setInterval("autoDown()",500);
		isBegin=true;
	}else{
		alert("当前游戏已经开始")
	}
})
var count=0;
//暂停按钮
$("#pause").click(function(){
		/* clearInterval(timer);
		hidden();
		isBegin=false; */
	if (count%2==0) {
		$("#pause").text("继续");
		clearInterval(timer);
	} else{
        timer=setInterval("autoDown()",500);
	    $("#pause").text("暂停");
	}	
	count++;
})
//是否开始游戏	
var isBegin=false;
//定时器设置
var timer;
//由键盘控制移动和变化
//键盘按下事件
window.onkeydown=function(event){
	//拿到对应键盘对象
	event=window.event || event;
	//把原本的坐标还原
	//定义一个二维数组 用来保存随机生成的坐标 移动的块
	target=[[-1,-1],[1,-1],[1,-1],[1,-1]];
	//拿到键盘上是哪个键
	//event.keyCode得到键盘的ascii码
	switch (event.keyCode){
		//回车的时候需要开始游戏
		case 13:
		    if(isBegin==false){
				 //随机生成块
				randomBlock();
				//给块的坐标位置赋值
				block();
				//重新绘图
				draw();
				timer=setInterval("autoDown()",500);
				isBegin=true;
			}else{
				alert("当前游戏已经开始")
			}
		    break;
		//按左箭头的时候
		case 37:
		    console.log("我被按了左箭头");
			hidden();
			move("left");
			if(canMove()){
				squArr=[[-1,-1],[1,-1],[1,-1],[1,-1]];
				//如果可以移动  坐标就变成了移动完的坐标
				squArr=target;
			}
			//赋值
			block();
		    break;
		//按上箭头的时候
		case 38:
		    console.log("我被按了上箭头");
		    break;
		//按右箭头的时候	
		case 39:
		    console.log("我被按了右箭头");
			hidden();
			move("right");
			if(canMove()){
				squArr=[[-1,-1],[1,-1],[1,-1],[1,-1]];
				//如果可以移动  坐标就变成了移动完的坐标
				squArr=target;
			}
			//赋值
			block();
		    break;
		//按下箭头的时候
		case 40:
	        console.log(squArr[3]);
		    console.log("我被按了下箭头");
		    autoDown();
		    break;
	}
}

