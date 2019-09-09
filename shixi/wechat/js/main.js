//得到屏幕的宽高
var WH = window.innerHeight;
var WW = window.innerWidth;
//设置大盒子的宽高
$(".content").css("width",WW);
$(".content").css("height",WH*5);
//设置大盒子的定位为绝对定位
$(".content").css("position","absolute");
//设置小盒子的宽高
$(".view").css("width",WW);
$(".view").css("height",WH);
//声明一个下标来记录当前所在页面
index = 0;
//控制音乐播放的按钮 $(this)表jquery对象的调用者
var music = document.getElementById("musicplay");
//滑动
$(".content").swipe({
	//鼠标 方向 时间 距离 触控点
	swipe:function(event,direction,duration,distance,fingerCount){
		//当前滑动的方向往上走
		if(direction == "up"){
			index++;
		}else if(direction == "down"){
			index--;
		}
		//当前页是最后一页 不允许往上移
		if(index>4){
			index = 4;
		}
		//当前页是最后一页 不允许往上移
		if(index<1){
			index = 0;
		}
		//jquery动画 animate(改变的样式，执行的时间，回调的方法)
		$(".content").animate({top:-index*WH + "px"},500,animateBox());
		
	}
})
//第一页显示背景 再逐个显示图片
$(".view1_Snacky").fadeIn(500,function(){
	//播放音乐
	// music.play();
	$(".view1_Thereis").fadeIn(1000,function(){
		$(".view1_Life").fadeIn(1000,function(){
			$(".view1_MoreTo").fadeIn(1000,function(){
				$(".view1_Nestle").fadeIn(1000,function(){
					$(".view1_CnNestle").fadeIn(1000,function(){
						$(".view1_CnLife").fadeIn(1000,function(){
							
						})
					})
				})
			})
		})
	})
})



// $(".mbtn").click(function(){
// 	if($(this).attr("src") == "img/musicBtn.png"){
// 		music.play();
// 	}
// })
$(".mbtn").click(function(){
	if(music.paused){
		music.play();
		$(this).attr("src","img/musicBtn.png");
	}else{
		music.pause();
		$(this).attr("src","img/musicBtnOff.png");
	}
})

function animateBox(){
	//当移到第二页的时候 需要展示第二页的动画
	if(index == 1){
		$(".view2_boy").animate({top:0},1000);
		$(".view2_TxtRightMe").animate({width:15+"%"},1000,function(){
			//成就人脉左移
			$(".view2_TxtLeft01").animate({left:0+"%"},1000,function(){
				$(".view2_TxtLeft02").animate({left:0+"%"},1000,function(){
					$(".view2_TxtLeft03").animate({left:0+"%"},1000,function(){
						$(".view2_TxtLeft04").animate({left:0+"%"},1000,function(){})
					})
				})
			})
			//销售汪出来
			$(".view2_TxtRightTitle").animate({height:20+"%"},1000,function(){
				$(".view2_TxtRight").animate({right:0},1000);
			})
			
		})
	}else if(index == 2){
		$(".view3_girl").animate({top:0},1000);
		$(".view3_TxtRightMe").animate({width:15+"%"},1000,function(){
			//成就人脉左移
			$(".view3_TxtRight04").animate({right:0+"%"},1000,function(){
				$(".view3_TxtRight03").animate({right:0+"%"},1000,function(){
					$(".view3_TxtRight02").animate({right:0+"%"},1000,function(){
						$(".view3_TxtRight01").animate({right:0+"%"},1000,function(){})
					})
				})
			})
			//销售汪出来
			$(".view3_TxtLeftTitle").animate({height:20+"%"},1000,function(){
				$(".view3_TxtLeft").animate({left:8+"%"},1000);
			})
		})
	}
}