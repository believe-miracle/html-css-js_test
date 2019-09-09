//定义的随机数 暂停的
var RandomNum;
//要转的圈数
var quan;
//定时器
var timer;
//速度
var spend = 200;
var arr = document.getElementsByClassName("check_box");
var index = 0;
var count;
//用来获取对象的方法
function $(classname){
	return document.getElementsByClassName(classname)[0];	
}

$("btn").onclick = function(){
	//产生随机数 Math.floor向下取整
	RandomNum = Math.floor(Math.random()*14)+1;
	quan = Math.floor(Math.random()*5)+1;
	//需要执行定时器的次数
	count = RandomNum+14*quan;
	index = 0;
	//调用定时器
	timer = setInterval("rotateBox()",spend);
}

function rotateBox(){
	//当前选中的是哪一个
	index++;
	//清除选中的样式
	for (var i=0;i<arr.length;i++) {
		arr[i].style.boxShadow = "none";
	}
	if(index%14==0){
		$("box_14").style.boxShadow = "5px 5px 10px #FF0000";
	}else{
		$("box_"+index%14).style.boxShadow = "5px 5px 10px #FF0000";
	}
	
	if(index == count){
		clearInterval(timer);
	}else if(index <= 5 || index >= count-5){
		//减速
		clearInterval(timer);
		spend = 300;
		timer = setInterval("rotateBox()",spend);
		
	}else{
		//加速
		clearInterval(timer);
		spend = 70;
		timer = setInterval("rotateBox()",spend);
	}
	
	
}