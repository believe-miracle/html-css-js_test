//得到设置的时间的控件
var time = document.getElementsByClassName("time")[0];
//
var hours = document.getElementsByClassName("hours")[0];
var minute = document.getElementsByClassName("minute")[0];
var second = document.getElementsByClassName("second")[0];
var music = document.getElementById("music");
var timer;
var sOfdata;

time.onchange = function(){
	//获取设置的时间
	var timevalue = time.value;
	//分割字符串得到闹钟设置的小时和分钟
	var array = timevalue.split(":");
	var timeH = parseInt(array[0]);
	var timeM = parseInt(array[1]);
	//获取当前设置的闹钟是在一天中的第几秒
	sOfdata = timeH*3600+timeM*60;
	
	timer = setInterval("getNum()",1000);
	
}

function getNum(){
	//获取当前计算机的时间
	var data1 = new Date;
	//拿到对应的 时 分 秒
	var h = data1.getHours();
	var m = data1.getMinutes();
	var s = data1.getSeconds();
	
	//计算离闹钟设置的时间还有多久
	// 同一单位
	//获取当前时间在一天中是第几秒
	var mOfdata = h*3600+m*60+s;
	var cha = 0;
	if(sOfdata>mOfdata){
		cha = sOfdata - mOfdata;
	}else if(sOfdata<mOfdata){
		cha = sOfdata+3600*24-mOfdata;
	}else{
		//播放音乐
		music.play();
		//是否清除定时器
		
		clearInterval(timer);
	}
	second.innerText = cha%60;
	minute.innerHTML = Math.floor(cha%3600/60);
	hours.innerHTML = Math.floor(cha/3600);
}