//数值1和数值2 声明字符串是因为要做连接
var number1 = "";
var number2 = "";
//运算符
var ys = "";
//拿到结果显示的盒子
var result = document.getElementsByClassName("result")[0];
//下面需要的是在点击的时候我做业务
//拿到所有的a标签 所有我需要点击的标签
var btns = document.getElementsByTagName("a");
//定义的值
var tet = "";
//遍历所有的a onclick点击事件
for (var i = 0; i < btns.length; i++) {
	btns[i].onclick = function() {
		tet = this.innerText;
		switch (tet) {
			case "AC":
				number1 = "";
				number2 = "";
				ys = "";
				result.innerText = "0"
				break;
			case "/":
				ys = "/";
				break;
			case "+":
				ys = "+";
				break;
			case "-":
				ys = "-";
				break;
			case "X":
				ys = "X";
				break;
			case "=":
				switch (ys) {
					case "/":
						result.innerText = number1/number2;
						break;
					case "+":
						result.innerText = number1+number2;
						break;
					case "-":
						result.innerText = number1-number2;
						break;
					case "X":
						result.innerText = number1*number2;
						break;
				}
				break;
			default:
				if(ys==""){
					number1=parseFloat(number1+tet);
					result.innerText=number1;
				}
				else{
					number2=parseFloat(number2+tet);
					result.innerText=number2;
				}
				break;
		}
	}
}
