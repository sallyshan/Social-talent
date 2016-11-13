;(function($){
	var i=0;
	function move(){
		i++;
		if(i>=100){
			i=100;
			$("#index").hide();
		} 
		$("#num").text(i);
		$(".progress>p").width(i*2);
	}	
	setInterval(move,30); 


	$("#sex h1>a").on("tap",function(){
		var txt=$(this).text();
		$("#sex").hide();
	})

	$("#star a").on("tap",function(){
		var idx=$(this).index();
		$("#star").hide();
	})

	
	/*var app={
		init:function(){
			this._initDom();
			this._initEvent();
		},
		_initDom:function(){
			this.index=$("#index");
			this.sex=$("#sex");
			this._p=$(".progress>p")
			this.sexa=$("#sex h1>a");
			this.star=$("#star");
			this.num=$("#num");
			this.i = 0;
		},
		_initEvent:function(){
			var self=this;
			timer = setInterval(function(){
				self._star();
			},30);
		},
		
		_star:function(){
			this.i++;
			if(this.i >= 100){
				this.i=100;
				this.index.hide();
				clearInterval(timer);
			}
			var self=this;
			this.num.text(self.i);
			self._p.width(self.i*2);
		}
	}
	app.init(); */
})(Zepto)