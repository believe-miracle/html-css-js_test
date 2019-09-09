//点击切换背景选中
$(".nav_top ul li a").click(function(){
	// alert("点我做啥")
	//给点击的a标签加上一个class属性
	$(this).attr("class","checkBtnBg");
	//去除其他的class属性
	//siblings同辈的元素  parents父节点元素  children子节点元素
	$(this).parents("li").siblings().children().removeClass("checkBtnBg");
})
//移动上去变成固定定位
//判断滚动条离上面的距离
//on jquery绑定方法   scroll是滚动栏移动的方法
$(window).on("scroll",function(){
	//scrollTop() 获取滚动栏离上面的距离
	//`alert($(this).scrollTop())
	//当滚动栏到上面距离大于等于180时
	if($(this).scrollTop()>=180){
		//添加一个样式
		$(".nav_top").addClass("fixed");
		// 操作图片切换的东西 离上面的距离变成多40px
		$(".ImageContent").css("margin-top","80px");
		//动画效果  把top值改为0
		$(".nav_top").animate({"top":"0px"},1000)
	}else{
		$(".nav_top").css("top","-40px");
		//移除一个样式
		$(".nav_top").removeClass("fixed");
		//设置样式
		$(".ImageContent").css("margin-top","40px");
	}
	//当滚动栏大于900时 固定左边导航栏
	if($(this).scrollTop()>=800){
		$(".nav_left").css("position","fixed");
		$(".nav_left").css("top","100px");	
	}else{
		$(".nav_left").css("position","absolute");
		$(".nav_left").css("top","800px");
	}
})

//关于图片的切换 移到banner_text下面的fl_left
$(".ImageContent .banner_text .fl_left").on("mouseenter",function(){
	if($(this).text()=="今日特惠大牌"){
		$(".ImageContent .banner img").attr("src","img/img1.jpg");
		$(".box_solid").animate({
			left:"0px"
		},200)
	}else{
		$(".ImageContent .banner img").attr("src","img/img2.jpg");
		$(".box_solid").animate({
			left:"150px"
		},200)
	}	
})
//mouseenter鼠标悬停事件
//鼠标移进事件
//document.onmouseenter
$(".box div").on("mouseenter",function(){
	$(this).append("<div class='addBox'></div>");
})
//鼠标移出事件
//document.onmouseleave
$(".box div").on("mouseleave",function(){
	$(".addBox").remove();
})
