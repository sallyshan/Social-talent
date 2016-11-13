;(function($){
	
	$(".ti").on("swipeUp",function(){
		
		$(this).css({
			"-webkit-transform":"translate3d(0,-100%,0)",
			"-webkit-transition":"transform .5s"
		})
			$(".box").css({
				"display":"block",
				"-webkit-transform":"translate3d(0,0,0)",
			})			
	})

	var score = 0;
	$("section").on("tap","a",function(){
		var num = $(this).data("score");
		score+=parseInt(num);
		$(".per").text(score);
		if($(this).hasClass("result")){
			$("#finish").show();
			$(".ti").hide();
			if(score >= 75){
				$(".high").css("display","block");
			}else{
				$(".low").css("display","block");
			}
		}else{
			$(this).parents(".ti").hide().next().show();
			
		}
	})

	var rdm = Math.floor(Math.random()*2+1);
	$("#_bag").on("tap",function(){
		$(".bag"+rdm+"").css({
			"-webkit-transform":"translate3d(0,0,0)",
			"display":"block"
		});
	})

	$("#bag").on("swipeUp",function(){
		$(this).css({
			"-webkit-transform":"translate3d(0,-100%,0)",
			"-webkit-transition":"all 0.2s"
		})
	    $("#do").css({
			"-webkit-transform":"translate3d(0,-100%,0)",
			"-webkit-transition":"all 0.2s"
		})

	})

	$("#do").on("swipeDown",function(){
		$("#bag").css({
			"-webkit-transform":"translate3d(0,0,0)",
			"-webkit-transition":"transform 0.2s"
		})
		$("#do").css({
			"-webkit-transform":"translate3d(0,0,0)",
			"-webkit-transition":"transform 0.2s"
		})

	})
	
	
	
})(Zepto)