$(function(){
	//注册成功登录主页面
	// var arr = $.cookie("obj1") ? JSON.parse($.cookie("obj1")) : [];
	// if(arr[0]!= undefined){
	// 	$('.h_c_t_leftUl1 a').html(arr[0].name);
	// 	$('.h_c_t_leftUl1 a').attr('href','#');
	// 	$('.h_c_t_leftUl2 a').html("注销");
	// 	$('.h_c_t_leftUl2 a').attr('href','#');
	// 	$('.h_c_t_leftUl2 a').click(function(){
	// 		$.cookie("obj1", "", {expires:-1, path:"/"});
	// 		$('.h_c_t_leftUl1 a').html("请登录");
	// 		$('.h_c_t_leftUl2 a').html("注册");
	// 		$('.h_c_t_leftUl1 a').attr('href','entry.html');
	// 		$('.h_c_t_leftUl2 a').click(function(){
	// 			$('.h_c_t_leftUl2 a').attr('href','register.html');
	// 		});
	// 	})
	// }
	// //直接登录主界面
	// var arr1 = $.cookie("obj2") ? JSON.parse($.cookie("obj2")) : [];
	// if(arr1[0]!= undefined){
	// 	$('.h_c_t_leftUl1 a').html(arr1[0].name);
	// 	$('.h_c_t_leftUl1 a').attr('href','#');
	// 	$('.h_c_t_leftUl2 a').html("注销");
	// 	$('.h_c_t_leftUl2 a').attr('href','#');
	// 	$('.h_c_t_leftUl2 a').click(function(){
	// 		$.cookie("obj2", "", {expires:-1, path:"/"});
	// 		$('.h_c_t_leftUl1 a').html("请登录");
	// 		$('.h_c_t_leftUl2 a').html("注册");
	// 		$('.h_c_t_leftUl1 a').attr('href','entry.html');
	// 		$('.h_c_t_leftUl2 a').click(function(){
	// 			$('.h_c_t_leftUl2 a').attr('href','register.html');
	// 		});
	// 	})
	// }


		$('.h_b_b_title').mouseenter(function(){
		$('.h_b_b_t_nav').show();
	})
	$('.h_b_b_title').mouseleave(function(){
		$('.h_b_b_t_nav').hide();
	})



	//固定位置内容
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top >= 600){
			$('.fixeds').show();
		}else{
			$('.fixeds').hide();
		}	
	})
	$('.fixeds3').click(function(){
		var top = $(window).scrollTop();
		var timer = setInterval(function(){
			top -= 200;
			console.log(top)
			if(top <= 0)
			{
				top = 0;
				$(window).scrollTop(top);
				clearInterval(timer);
			}
			$(window).scrollTop(top);
		},10);	
	})
	// //轮播图
	// var index = 0;
	// $.getJSON("json/banner.json", function(data){
	// 	//遍历, 添加li
	// 	for (var i=0; i<data.length; i++) {
	// 		var obj = data[i];
	// 		var li = $("<li><img src=" + obj.img + " /></li>");
	// 		if (i == 0){
	// 			li.css("opacity", 1);
	// 		}else{
	// 			li.css("opacity", 0);
	// 		}
	// 		$(".banner_img").append(li);
	// 	}
	// 	setInterval(function(){
	// 		$('.banner_img li').eq(index).animate({opacity:'0'},'1000');
	// 		$('.banner_img li').eq(index + 1 >= data.length ? 0 : index + 1).animate({opacity:'1'},'1000');
	// 		$('.banner_num span').eq(index + 1 >= data.length ? 0 : index + 1).css('background','red').siblings().css('background',"#444")
	// 		index++;
	// 		if(index == data.length)
	// 		{
	// 			index = 0;
	// 		}
	// 	},4000)
	// })
	// $('.banner_num span').click(function(){
	// 	$('.banner_img li').eq(index).animate({opacity:'0'},'1000');
	// 	index = $(this).index();
	// 	$(this).css('background','red').siblings().css('background','#444');
	//
	// 	$('.banner_img li').eq(index).animate({opacity:'1'},'1000');
	// })
	//品牌特卖
	$('.tab-con ul').eq('0').show();
	$('.sample_sale h1 ul li').click(function(){
		$(this).removeClass().addClass('select').siblings().removeClass();
		$('.tab-con ul').eq($(this).index()).show().siblings().hide();
	})
	//限时抢购
	$('.flash_sale h1 .clock').eq(0).show();
	$('.flash_sale_commodity').eq(0).show();
		//默认显示为第一个定时器
	time(0);
	var timer = setInterval(function(){
		time(0);
	}, 1000)
		//点击切换
	$('.flash_sale h1 ul li').click(function(){
		$(this).removeClass().addClass('select').siblings().removeClass();
		$('.flash_sale h1 .clock').eq($(this).index()).show().siblings('.flash_sale h1 .clock').hide();
		//定时器切换 
		var index1 = $(this).index();
		clearInterval(timer);
		time(index1);
		timer = setInterval(function(){
			time(index1);
		}, 1000)
		$('.flash_sale_commodity').eq($(this).index()).show().siblings('.flash_sale_commodity').hide();
	})
	//白酒分类管理
	var indexs = 0;
	var width = $('.floor_liquor h1 ul li').outerWidth(true);
	$('.floor_liquor h1 ul li').eq(0).css({'color':'darkred','font-weight':'bold'})
	$('.floor_liquor h1 ul li').mouseover(function(){		
		$(this).css({'color':'darkred','font-weight':'bold'}).siblings().css({'color':'#444','font-weight':'normal'});
		$('.f_l_c_content div').eq($(this).index()).show().siblings().hide();
		indexs = $(this).index();
		if(indexs >= $('.floor_liquor h1 ul li').length - 1){
			indexs = $('.floor_liquor h1 ul li').length - 2;
			$('.floor_liquor h1 ul li').eq(indexs).css({'color':'darkred','font-weight':'bold'}).siblings().css({'color':'#444','font-weight':'normal'});
		}
		$('.floor_liquor h1 p').css('left',600 + indexs * width + "px")
	})
	//中间数据
	// $.getJSON("json/floor_liquor.json",function(data){
	// 	//遍历，取得ul
	// 	for (var i=0; i < $('.floor_liquor h1 ul li').length - 1; i++){
	// 		var obj = data[i];
	// 		var div = $("<div></div>");
	// 		for(var j = 0; j < obj.length; j++){
	// 			var ul = $("<ul><li><img src = "+obj[j].img+"/></li><li><p>"+obj[j].name+"</p></li><li><span>"+obj[j].price+"</span></li></ul>");
	// 			$(div).append(ul);
	// 		}
	// 		$(".f_l_c_content").append(div);
	// 	}
	// 	$('.f_l_c_content div').eq(0).show();
	// 	//得到商品ID转到商品详情
	// 	$('.f_l_c_content div ul').click(function(){
	// 		var index = $(this).index()
	// 		for (var i = 0; i < $('.floor_liquor h1 ul li').length - 1; i++){
	// 			var obj = data[i];
	// 			for(var j = 0; j < obj.length; j++){
	// 				if(obj[j].id == data[indexs][index].id){
	// 					window.location.href = "ProductList.html?id="+obj[j].id;
	// 					return;
	// 				}
	// 			}
	// 		}
	// 		$.ajax({
	// 			type:"get",
	// 			url:"json/floor_liquor.json",
	// 			data:{},
	// 			success:function(data){
	// 			console.log("请求成功"+ data[indexs][index].id);
	// 			},
	// 		})
	// 	})
	// 	$('.floor_liquor .ul1 li').mouseenter(function(){
	// 		$(this).children('.active').show();
	// 	})
	// 	$('.floor_liquor .ul1 li').mouseleave(function(){
	// 		$(this).children('.active').hide();
	// 	})
	// })
	//红酒分类管理
	var indexs1 = 0;
	var width = $('.red_wine h1 ul li').outerWidth(true);
	$('.red_wine h1 ul li').eq(0).css({'color':'darkred','font-weight':'bold'})
	$('.red_wine h1 ul li').mouseover(function(){	
		$(this).css({'color':'darkred','font-weight':'bold'}).siblings().css({'color':'#444','font-weight':'normal'});
		$('.r_w_c_content div').eq($(this).index()).show().siblings().hide();
		indexs1 = $(this).index();
		if(indexs1 >= $('.red_wine h1 ul li').length - 1){
			indexs1 = $('.red_wine h1 ul li').length - 2;
			$('.red_wine h1 ul li').eq(indexs1).css({'color':'darkred','font-weight':'bold'}).siblings().css({'color':'#444','font-weight':'normal'});
		}
		$('.red_wine h1 p').css('left',600 + indexs1 * width + "px");
	})
	//中间数据
	$.getJSON("json/red_wine.json",function(data){
		//遍历，取得ul
		for (var i=0; i < $('.red_wine h1 ul li').length - 1; i++) {
			var obj = data[i];
			var div = $("<div></div>");
			for(var j = 0; j < obj.length; j++){
				var ul = $("<ul><li><img src = "+obj[j].img+"/></li><li><p>"+obj[j].name+"</p></li><li><span>"+obj[j].price+"</span></li></ul>");
				$(div).append(ul);
			}
			$(".r_w_c_content").append(div);
		}
		$('.r_w_c_content div').eq(0).show();
		//得到商品ID转到商品详情
		$('.r_w_c_content div ul').click(function(){
			var index = $(this).index()
			for (var i = 0; i < $('.red_wine h1 ul li').length - 1; i++){
				var obj = data[i];
				for(var j = 0; j < obj.length; j++){
					if(obj[j].id == data[indexs1][index].id){
						window.location.href = "ProductList.html?id="+obj[j].id;
						return;
					}
				}
			}
			$.ajax({
				type:"get",
				url:"json/red_wine.json",
				data:{},
				success:function(data){
				console.log("请求成功"+ data[indexs1][index].id);
				}
			})
		})
	})
	//洋酒分类管理
	var indexs2 = 0;
	var width = $('.foreign_wine h1 ul li').outerWidth(true);
	$('.foreign_wine h1 ul li').eq(0).css({'color':'darkred','font-weight':'bold'})
	$('.foreign_wine h1 ul li').mouseover(function(){		
		$(this).css({'color':'darkred','font-weight':'bold'}).siblings().css({'color':'#444','font-weight':'normal'});
		$('.f_w_c_content div').eq($(this).index()).show().siblings().hide();
		indexs2 = $(this).index();
		if(indexs2 >= $('.foreign_wine h1 ul li').length - 1){
			indexs2 = $('.foreign_wine h1 ul li').length - 2;
			$('.foreign_wine h1 ul li').eq(indexs2).css({'color':'darkred','font-weight':'bold'}).siblings().css({'color':'#444','font-weight':'normal'});
		}
		$('.foreign_wine h1 p').css('left',780 + indexs2 * width + "px")
	})
	$.getJSON("json/floor_liquor.json",function(data){
		//遍历，取得ul
		for (var i=0; i < $('.foreign_wine h1 ul li').length - 1; i++) {
			var obj = data[i];
			var div = $("<div></div>");
			for(var j = 0; j < obj.length; j++){
				var ul = $("<ul><li><img src = "+obj[j].img+"/></li><li><p>"+obj[j].name+"</p></li><li><span>"+obj[j].price+"</span></li></ul>");
				$(div).append(ul);
			}
			$(".f_w_c_content").append(div);
		}
		$('.f_w_c_content div').eq(0).show();
			//得到商品ID转到商品详情
		$('.f_w_c_content div ul').click(function(){
			var index = $(this).index()
			for (var i = 0; i < $('.foreign_wine h1 ul li').length - 1; i++){
				var obj = data[i];
				for(var j = 0; j < obj.length; j++){
					if(obj[j].id == data[indexs2][index].id){
						window.location.href = "ProductList.html?id="+obj[j].id;
						return;
					}
				}
			}
			$.ajax({
				type:"get",
				url:"json/floor_liquor.json",
				data:{},
				success:function(data){
				console.log("请求成功"+ data[indexs2][index].id);
				}
			})
		})
	})
	//其他
	var indexs3 = 0;
	var width = $('.other h1 ul li').outerWidth(true);
	$('.other h1 ul li').eq(0).css({'color':'darkred','font-weight':'bold'})
	$('.other h1 ul li').mouseover(function(){		
		$(this).css({'color':'darkred','font-weight':'bold'}).siblings().css({'color':'#444','font-weight':'normal'});
		$('.o_c_content div').eq($(this).index()).show().siblings().hide();
		indexs3 = $(this).index();
		if(indexs3 >= $('.other h1 ul li').length - 1){
			indexs3 = $('.other h1 ul li').length - 2;
			$('.other h1 ul li').eq(indexs3).css({'color':'darkred','font-weight':'bold'}).siblings().css({'color':'#444','font-weight':'normal'});
		}
		$('.other h1 p').css('left',780 + indexs3 * width + "px")
	})
	$.getJSON("json/red_wine.json",function(data){
		//遍历，取得ul
		for (var i=0; i < $('.other h1 ul li').length - 1; i++) {
			var obj = data[i];
			var div = $("<div></div>");
			for(var j = 0; j < obj.length; j++){
				var ul = $("<ul><li><img src = "+obj[j].img+"/></li><li><p>"+obj[j].name+"</p></li><li><span>"+obj[j].price+"</span></li></ul>");
				$(div).append(ul);
			}
			$(".o_c_content").append(div);
		}
		$('.o_c_content div').eq(0).show();
		//得到商品ID转到商品详情
		$('.o_c_content div ul').click(function(){
			var index = $(this).index()
			for (var i = 0; i < $('.other h1 ul li').length - 1; i++){
				var obj = data[i];
				for(var j = 0; j < obj.length; j++){
					if(obj[j].id == data[indexs3][index].id){
						window.location.href = "ProductList.html?id="+obj[j].id;
						return;
					}
				}
			}
			$.ajax({
				type:"get",
				url:"json/red_wine.json",
				data:{},
				success:function(data){
				console.log("请求成功"+ data[indexs3][index].id);
				}
			})
		})
	})
})
//限时抢购  倒计时
function show_time(x){ 
    var time_start = new Date().getTime(); //设定当前时间
    var time_end =  new Date(x).getTime(); //设定目标时间
    // 计算时间差 
    var time_distance = time_end - time_start; 
    // 天
    var int_day = Math.floor(time_distance/86400000); 
    time_distance -= int_day * 86400000; 
    // 时
    var int_hour = Math.floor(time_distance/3600000);
    time_distance -= int_hour * 3600000; 
    // 分
    var int_minute = Math.floor(time_distance/60000);
    time_distance -= int_minute * 60000; 
    // 秒 
    var int_second = Math.floor(time_distance/1000); 
    // 时分秒为单数时、前面加零 
    if(int_day < 10){ 
        int_day = "0" + int_day; 
    } 
    if(int_hour < 10){ 
        int_hour = "0" + int_hour; 
    } 
    if(int_minute < 10){ 
        int_minute = "0" + int_minute; 
    } 
    if(int_second < 10){
        int_second = "0" + int_second; 
    } 
    // 显示时间 
    $(".time_d").html(int_day); 
    $(".time_h").html(int_hour); 
    $(".time_m").html(int_minute); 
    $(".time_s").html(int_second); 
} 
function time(index){
	if (index == 0) {
    	show_time("2016/09/27 12:00:00");
    }
    else if (index == 1) { 
		show_time("2016/11/11 00:00:00");
	}
}