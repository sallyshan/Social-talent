;(function($){
	var ls = window.localStorage;
	var score = ls.getItem("score");
	$(".per").text(score);
	if(score >= 75){
		$(".high").css("display","block");
	}else{
		$(".low").css("display","block");
	}
})(Zepto)