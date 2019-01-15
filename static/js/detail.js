$(function(){
	//头部下拉框
	$('.h_b_b_title').mouseenter(function(){
		$('.h_b_b_t_nav').show();
	})
	$('.h_b_b_title').mouseleave(function(){
		$('.h_b_b_t_nav').hide();
	})
	//中间商品详情
	//小图片效果
	$('.content ul li').eq(0).addClass('select').siblings().addClass('select1');
	$('.content ul li').mouseenter(function(){
		$(this).addClass('select').siblings().removeClass('select').addClass('select1');
		$('.c_i_l_top img').attr('src',$(this).children('img').attr('src'));
		$('.bigImg').attr('src',$(this).children('img').attr('src'));
	})
	//左侧小图片转动按钮
	$('.left').click(function(){
		var left = $('.content ul').position().left
		left += 75;
		if(left >= 0){
			left = 0;
			i--;
			if(i <= 0){
				i = 0;
			}
			$('.content ul').css('left',left + "px");			
			return;
		}
		$('.content ul').css('left',left + "px");
		i--;
	})
	//右侧小图片转动按钮
	var i = 0;
	$('.right').click(function(){
		var right = $('.content ul').position().left
		right -= 75;
		if(i >= $('.content ul li').length - 1){
			return;
		}
		i++;
		$('.content ul').css('left',right + "px")
	})
	//放大镜效果
	var _smallImg = $(".smallImg"); //小图
	var _smallArea = $(".smallArea"); //小区域
	var _bigImg = $(".bigImg"); //大图
	var _bigArea = $(".bigArea"); //大区域
	//计算小区域_smallArea的宽高
	_smallArea.width( _smallImg.width()/_bigImg.width() * _bigArea.width() );
	_smallArea.height( _smallImg.height()/_bigImg.height() * _bigArea.height() );
	//放大系数(放大倍数)
	var scale = _bigImg.width() / _smallImg.width();
	//鼠标移动
	$(document).mousemove(function(e){
		
		var leftSide = _smallImg.offset().left; //小图左边界
		var rightSide = leftSide + _smallImg.width(); //小图右边界
		var topSide = _smallImg.offset().top; //小图上边界
		var bottomSide = topSide + _smallImg.height(); //小图下边界
		//判断鼠标在小图中间
		if (e.pageX > leftSide && e.pageX < rightSide && e.pageY > topSide && e.pageY < bottomSide){
			_smallArea.show(); //显示小区域	
			_bigArea.show();  //显示大区域
			//移动小区域, 跟随鼠标移动
			var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
			var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;
			//判断x不超出左边界,也不超出右边界
			if (x < 0) {
				x = 0;
			}
			else if (x > _smallImg.width() - _smallArea.width()) {
				x = _smallImg.width() - _smallArea.width();
			}
			//判断y不超出上边界,也不超出下边界
			if (y < 0) {
				y = 0;
			}
			else if(y > _smallImg.height() - _smallArea.height()){
				y = _smallImg.height() - _smallArea.height();
			}
			_smallArea.css({left: x, top: y});
			//移动大图
			_bigImg.css({left: -x*scale, top: -y*scale});
		}
		else{
			_smallArea.hide();//隐藏小区域
			_bigArea.hide();  //隐藏大区域
		}
	})
	//商品数量增减按钮
	$('.add').click(function(){
		$('.c_i_c_b_left input').val($('.c_i_c_b_left input').val() * 1 + 1);
		if($('.c_i_c_b_left input').val() * 1 >= $('.c_i_c_b_right em').html()){
			$('.c_i_c_b_left input').val($('.c_i_c_b_right em').html());
		}
	})
	$('.minus').click(function(){
		$('.c_i_c_b_left input').val($('.c_i_c_b_left input').val() * 1 - 1);
		if($('.c_i_c_b_left input').val() <= 0){
			$('.c_i_c_b_left input').val(0);
		}
	})
	//得到商品ID
	// if(window.location.search != ''){
	// 	var id = window.location.search.split("?")[1].split("=")[1];
	// 	$.getJSON("json/floor_liquor.json",function(data){
	// 		console.log(data.length)
	// 		for (var i = 0; i < data.length; i++){
	// 			var obj = data[i];
	// 			for(var j = 0; j < obj.length; j++){
	// 				if(obj[j].id == id){
	// 					$('.content_nav em').html(obj[j].name);
	// 					$('.content_info_content h1').html(obj[j].name);
	// 					$('.content_info_content_dl1 .dd1').html(obj[j].price);
	// 					$('.smallImg').attr('src',obj[j].img);
	// 					$('.content img').eq(0).attr('src',obj[j].small.img1);
	// 					$('.content img').eq(1).attr('src',obj[j].small.img2);
	// 					$('.content img').eq(2).attr('src',obj[j].small.img3);
	// 					$('.content img').eq(3).attr('src',obj[j].small.img4);
	// 					$('.content img').eq(4).attr('src',obj[j].small.img5);
	// 					$('.bigImg').attr('src',obj[j].img);
	// 					return;
	// 				}
	// 			}
	// 		}
	// 	})
		// $.getJSON("json/red_wine.json",function(data){
		// 	for (var i = 0; i < data.length; i++){
		// 		var obj = data[i];
		// 		for(var j = 0; j < obj.length; j++){
		// 			if(obj[j].id == id){
		// 				$('.content_nav em').html(obj[j].name);
		// 				$('.content_info_content h1').html(obj[j].name);
		// 				$('.content_info_content_dl1 .dd1').html(obj[j].price);
		// 				$('.smallImg').attr('src',obj[j].img);
		// 				$('.content img').eq(0).attr('src',obj[j].small.img1);
		// 				$('.content img').eq(1).attr('src',obj[j].small.img2);
		// 				$('.content img').eq(2).attr('src',obj[j].small.img3);
		// 				$('.content img').eq(3).attr('src',obj[j].small.img4);
		// 				$('.content img').eq(4).attr('src',obj[j].small.img5);
		// 				$('.bigImg').attr('src',obj[j].img);
		// 				return;
		// 			}
		// 		}
		// 	}
		// })
	// }
	// 固定位置内容
	$('.fixeds_1').mouseenter(function(){
		$(this).css('background','darkred');
		$(this).parent().css('overflow','visible');
	})
	$('.fixeds_1').mouseleave(function(){
		$(this).css('background','#313131');
		$(this).parent().css('overflow','hidden');
	})
	$('.fixeds_1Top').click(function(){
		var top = $(window).scrollTop();
		var timer = setInterval(function(){
			top -= 100;
			console.log(top)
			if(top <= 0)
			{
				top = 0;
				$(window).scrollTop(top);
				clearInterval(timer);
			}
			$(window).scrollTop(top);
		},50);
	})
	$('.fixeds_1Cart').click(function(){
		window.location.href = "shoppingCart.html";
	})
	// 商品加入购物车
	$('.c_i_c_b_right_a1').click(function(){
		var arr = $.cookie("objs") ? JSON.parse($.cookie("objs")) : [];
		var obj1 = {};
		obj1.name = $('.content_info_content h1').html();
		obj1.price = $('.content_info_content_dl1 .dd1').html();
		obj1.img = $('.content ul li img').eq(0).attr('src');
		obj1.num = $('.c_i_c_b_left input').val();
		for(var i = 0;i < arr.length; i++){
			if(obj1.name == arr[i].name){
				$.cookie("objs", JSON.stringify(arr), {expires:-1, path:"/"});
				arr[i].num = arr[i].num * 1 + obj1.num * 1;
				$.cookie("objs", JSON.stringify(arr), {expires:7, path:"/"});
				break;
			}else if(i == arr.length - 1){
				arr.push(obj1);
				$.cookie("objs", JSON.stringify(arr), {expires:7, path:"/"});
				break;
			}
		}
		if(arr.length == 0){
			arr.push(obj1);
			$.cookie("objs", JSON.stringify(arr), {expires:7, path:"/"});
		}
		alert("添加成功");
		show();
	})
	function show(){
		var arr = $.cookie("objs") ? JSON.parse($.cookie("objs")) : [];
		var numbers = 0;
		if(arr.length > 0){
			$('.fixeds_2').show();
			for(var i = 0; i < arr.length; i++){
				numbers = numbers + arr[i].num * 1;
			}
			$('.fixeds_2').html(numbers);
			$('.num').html(numbers)
		}else{
			$('.fixeds_2').hide();
		}
	}
	show();
})

