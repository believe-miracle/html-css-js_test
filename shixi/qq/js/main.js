//鼠标移入事件
$(".content_left li a").mouseenter(function(){
	$(this).addClass("checkLink");
	//同辈的li 下面的a 移出这个样式
	$(this).parents("li").siblings("li").children("a").removeClass("checkLink");
})
//鼠标移出事件 变成原来的样式
$(".content_left").mouseleave(function(){
	$(".content_left li a").removeClass("checkLink");
	//再给第一个加
	$("#index").addClass("checkLink");
	
})
	
