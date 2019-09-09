//先拿到猫的主体
var cat = document.getElementById("cat");
//拿到音频播放控件
var music = document.getElementById("music");
//定义变量 保存定时器
var timer;
//动画切图 图片的个数 图片的名称
//抽取动画的共同特点形成一个函数
function playAnimation(count,name){
//定时器
// setTimeout 只执行一次的定时器
// setInterval 重复调用的定时器
	clearInterval(timer)
	var index = 0;
	//执行自己的动画 定时器 传的值第一个是执行函数 第二个是执行的事件（毫秒）
	timer = setInterval(
		function(){
			if(++index<count){
				cat.src = "img/Animations/"+name+"/"+name+"_"+IndexOfO(index)+".jpg";
			}else{
				//当index的值不小于count时清除动画
				clearInterval(timer)
			}
		},80
	)
}
//补零的方法 当下标小于10 前面补零
function IndexOfO(index){
	if(index<10){
		return "0"+index;
	}else{
		return index;
	}
}
//拿到所有需要点击的块
var cymbal = document.getElementById("cymbal");
cymbal.onclick = function(){
	//音频文件src属性变化
	music.src = "mp3/pia.mp3";
	//播放音频
	music.play();
	playAnimation(13,"cymbal");
}
var drink = document.getElementById("drink");
drink.onclick = function(){
	playAnimation(81,"drink");
}
var eat = document.getElementById("eat");
eat.onclick = function(){
	playAnimation(40,"eat");
}
var fart = document.getElementById("fart");
fart.onclick = function(){
	//音频文件src属性变化
	music.src = "mp3/pi.wav";
	//播放音频
	music.play();
	playAnimation(28,"fart");
}
var pie = document.getElementById("pie");
pie.onclick = function(){
	playAnimation(24,"pie");
}
var scratch = document.getElementById("scratch");
scratch.onclick = function(){
	playAnimation(56,"scratch");
}
var knockout = document.getElementById("knockout");
knockout.onclick = function(){
	playAnimation(81,"knockout");
}
var angry = document.getElementById("angry");
angry.onclick = function(){
	playAnimation(26,"angry");
}
var stomach = document.getElementById("stomach");
stomach.onclick = function(){
	music.src = "mp3/tomaiyou.mp3";
	music.play();
	playAnimation(34,"stomach");
}
var footLeft = document.getElementById("footLeft");
footLeft.onclick = function(){
	playAnimation(30,"footRight");
}
var footRight = document.getElementById("footRight");
footRight.onclick = function(){
	playAnimation(30,"footLeft");
}






