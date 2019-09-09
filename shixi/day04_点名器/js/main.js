//需要点击的的按钮
var btn = document.getElementById("action");
//需要显示的块
var showBlock = document.getElementById("stuName");
var timer;
var index = 0;
//准备数据 []表示数组
var data = ["刘迎娣", "彭琴", "张瑞", "王玉婷", "邱静", "孟振华", "陈伊婷"]
btn.onclick = function() {
	//innerText 文本修改
	if (this.innerText == "开始") {
		this.innerText = "停止";
		start();
	} else {
		this.innerText = "开始";
		//清楚定时器
		clearInterval(timer);
	}
}

function start() {
	//定时器定义
	 timer= setInterval(function() {
		 //当到达最后一个跳到第一个
		if (++index == data.length) {
			index = 0;
		}
		//显示到块中
		showBlock.innerText = data[index];
	}, 50)
}
