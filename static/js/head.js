$(function(){
	//头部中间部分右侧的微博，微信显示部分
	$('.h_c_n_right img').eq(0).mousemove(function(){
		$('.img1').css('display','block');
	});
	$('.h_c_n_right img').eq(0).mouseout(function(){
		$('.img1').css('display','none');
	});
	$('.h_c_n_right img').eq(1).mousemove(function(){
		$('.img2').css('display','block');
	});
	$('.h_c_n_right img').eq(1).mouseout(function(){
		$('.img2').css('display','none');
	});
	//头部底部的购物车显示部分
	$('.h_b_t_right,.number').mousemove(function(){
		$('.number').css({'display':'block','border':'2px solid #ccc','z-index':1});
		$('.h_b_t_right').css({'height':'42px','border':'2px solid #ccc','border-bottom':'none','cursor':'pointer','z-index':2,'color':'darkred'});
	})
	$('.h_b_t_right,.number').mouseout(function(){
		$('.number').css({'display':'none','border':'1px solid #ccc'});
		$('.h_b_t_right').css({'height':'36px','border':'1px solid #ccc','color':'#666'});
	})
	$('.h_b_t_right p').click(function(){
		window.location.href = "shoppingCart.html";
	})
	//购物车显示数量
	function show(){
		var arr = $.cookie("objs") ? JSON.parse($.cookie("objs")) : [];
		var numbers = 0;
		for(var i = 0; i < arr.length; i++){
			numbers = numbers + arr[i].num * 1; 
		}
		$('.num').html(numbers)
	}
	show();
	//头部底部商城下拉菜单显示部分
	$('.h_b_b_t_nav div').mouseenter(function(){
		$(this).children('.h_b_b_t_nav_div').css('background','darkred').parent().siblings().children('.h_b_b_t_nav_div').css('background','#222');
		$(this).children('.banner_content').show().parent().siblings().children('.banner_content').hide();
		$(this).children('.h_b_b_t_nav_div').children('.triangle').show().parent().parent().siblings().children('.h_b_b_t_nav_div').children('.h_b_b_t_nav_div').hide();
	})
	$('.h_b_b_t_nav div').mouseleave(function(){
		$(this).children('.h_b_b_t_nav_div').css('background','#222')
		$(this).children('.h_b_b_t_nav_div').children('.triangle').hide();
		$(this).children('.banner_content').hide();
	})
	$('.h_b_b_t_nav_div h3 a').click(function(e){
		e.preventDefault();
		window.location.href = 'commodityList.html';
	})
})
