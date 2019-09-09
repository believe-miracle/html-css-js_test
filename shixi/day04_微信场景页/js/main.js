//获取屏幕的宽度
var pmw = window.innerWidth;
//获取屏幕的高度
var pmh = window.innerHeight;
//设置大的div的高度和宽度
$(".content").width(pmw);
$(".content").height(pmh * 4);
//设置小的div的宽度和高度
$(".page").width(pmw);
$(".page").height(pmh);
//当前是第几页
var index = 0;
//滑动效果
$(".content").swipe({
	//需要参数 鼠标对象 方向 距离 时间 触碰点
	swipe: function(event, direction, distance, duration, fingerCount) {
		//向上移的时候 index++
		//向下移的时候 index--
		if (direction == "up") {
			index++;
		} else if (direction == "down") {
			index--;
		}
		//当前页为第一页的时候 不能往下移
		if (index < 0) {
			index = 0;
		}
		//当前页为第四页的时候 不能往上移
		if (index > 3) {
			index = 3;
		}
		//animate jquery中的动画
		//{}键值对 你要变化的样式 时间 回调方法
		$(".content").animate({
			top: index * -100 + "%"
		}, 500, start())
	}
})
//用来到达每一页执行不同的动画
//building 要淡入 人要从0变大 fadeIn淡入从隐藏到显示
//墙2秒出来 之后人出小变大
$(".build").fadeIn(2000, function() {
	$(".page1_flight").animate({
		width: "70%"
	}, 2000)
})
// //1.autoplay="true"属性没有作用时
// //播放音乐
// //获取音乐播放的元素
// var music = document.getElementById("music");
// //播放音乐
// music.play();
// // 获取点击音乐的图片
var musicBtn = document.getElementsByClassName("musicBtn")[0];
//给需要点击的图片加点击事件
musicBtn.onclick = function() {
	//当音频播放器没有播的时候播放背景换图片
	// if (music.paused) { // 是否停止播放
	// 	//播放
	// 	music.play();
	// 	musicBtn.src = "images/musicBtn.png"
	// 	//当音乐播放的时候换图片停音乐
	// } else {
	// 	//暂停
	// 	music.pause();
	// 	musicBtn.src = "images/musicBtnOff.png"
	// }
	//2.设置autoplay="true"属性有作用时 
	if ($(".musicBtn").attr("src") == "images/musicBtn.png") {
		music.pause();
		// musicBtn.src = "images/musicBtnOff.png"
		$(".musicBtn").attr("src", "images/musicBtnOff.png");
	} else {
		music.play();
		//musicBtn.src = "images/musicBtn.png"
		$(".musicBtn").attr("src", "images/musicBtn.png");
	}
}

function start() {
	if (index == 0) {
		$(".arrow_up").css("transform", "rotate(180deg)");
	} else if (index == 1) {
		//先淡入背景，再显示文字
		$(".page2_bg").fadeIn(2000, function() {
			$(".page2_farm").fadeIn(2000, function() {
				$(".page2_star").fadeIn(2000)
				$(".page2_IT").fadeIn(2000)
			})
		})
	} else if (index == 2) {
		//文字淡入 车走 人出来
		$(".page3_bus").animate({
			left: "-60%"
		}, 1500)
		$(".page3_lastBat").animate({
			left: "14%"
		}, 2000)
		$(".page3_et").fadeIn(1000, function() {
			$(".page3_lastbt").fadeIn(1000, function() {
				//隐藏第一个块的内容 显示第二个块的内容 fadeOut淡出
				$(".firstBlock").fadeOut(2000, function() {
					//做最后的效果 先显示墙 再显示人 最后文字宽度变宽
					$(".page3_wall").fadeIn(2000, function() {
						$(".page3_ta").fadeIn(2000, function() {
							$(".page3_ts").animate({
								width: "40%"
							}, 2000, function() {
								$(".page3_twt").animate({
									width: "60%"
								}, 2000)
							})
						})
					})
				})
			})
		})
	} else if (index == 3) {
		$(".mypage_imgbg").fadeIn(1000, function() {
			$(".mypage_img1").fadeIn(500)
			$(".mypage_img2").fadeIn(500)
			$(".mypage_title").fadeIn(500, function() {
					$(".mypage_img3").animate({
						left: "20%",
						top: "15%",
					}, 1000,function(){
						$(".mypage_img4").animate({
							top: "40%",
							left: "3%",
						},1000,function(){
							$(".mypage_img5").animate({
							top: "40%",
							right:"3%"
							})
						})
					})
				})
			$(".mypage_text").animate({
				left:"5%"
			},4000)
		})

	}
}
