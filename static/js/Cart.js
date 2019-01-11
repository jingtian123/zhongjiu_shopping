$(function(){
	$.getJSON("json/Cart.json",function(data){
		for(var i = 0; i < data.length; i++){
			var obj = data[i];
			var ul = $("<ul></ul>")
			for(var j = 0; j < obj.length; j++){
				var li = $("<li><img src =" + obj[j].img + "/><p>" + obj[j].name + "</p><p><span>" + obj[j].price + "</span><span>" + obj[j].deletePrice + "</span></p><button>加入购物车</button></li>");
				$(ul).append(li);
			}
			$('.sp_scclearfid').append(ul);
		}
		$('.sp_scclearfid ul').eq(0).show();
		var i = 0;
		$('.sc_left').click(function(){
			i--;
			if(i <= 0){
				i = 0;
				$('.sp_scclearfid ul').eq(i).show().siblings('ul').hide();
				return;
			}
			$('.sp_scclearfid ul').eq(i).show().siblings('ul').hide();
		})
		$('.sc_right').click(function(){
			i++;
			if(i >= data.length -1){
				i = data.length -1;
				$('.sp_scclearfid ul').eq(i).show().siblings('ul').hide();
				return;
			}
			$('.sp_scclearfid ul').eq(i).show().siblings('ul').hide();
		})
	})
	//继续购物跳转首页
	$('.cart_message1_bottom button').click(function(){
		window.location.href = "home_page.html";
	})
	//购物车内容
	var arr = $.cookie("objs") ? JSON.parse($.cookie("objs")) : [];
	if(arr.length <= 0){
		$('.cart_message').show();
		$('.cart_message1').hide();
	}
	else{
		
		//删除开始默认的列表
		$(".cart_message1_contentUl").remove();
		//循环生成列表
		var num = 0;
		var price = '￥0';
		for(var i = 0; i < arr.length; i++){
			var ul = $("<ul><li class='cart_message1_content_li1'><img src=" + arr[i].img + "/><a href='ProductList.html' class='names'>"+arr[i].name+"<em>[特价]</em></a></li><li class='cart_message1_content_li2'>"+arr[i].price+"</li><li class='cart_message1_content_li3'><input type='text' value="+arr[i].num+"></li><i class='minus'>-</i><i class='add'>+</i><li class='cart_message1_content_li4'>￥"+arr[i].price.split('￥')[1] * arr[i].num+"</li><li class='cart_message1_content_li5'><a href=''>加入收藏夹</a><br/><a href='' name="+arr[i].name+">删除</a></li></ul>");
			 num += arr[i].num * 1;
			 price = '￥' + (price.split('￥')[1] * 1 + arr[i].price.split('￥')[1] * arr[i].num);
			$('.cart_message1_content').append(ul);
			$('.cart_message1_bottom em').html(num);
			$('.cart_message1_bottom span').html(price);
			$('.end em').html(price);
		}
		$('.sc_top').html('购买了同样商品的用户还购买了').css('width','250px');
		$('.cart_message1').show();
		$('.cart_message').hide();
		//点击按钮添加数量
		$('.add').click(function(){
			var price = "￥0";
			num++;
			$('.cart_message1_bottom em').html(num);
			$(this).siblings('.cart_message1_content_li3').children('input').val($(this).siblings('.cart_message1_content_li3').children('input').val()* 1 + 1);
			//计算价格
			$(this).siblings('.cart_message1_content_li4').html("￥" + ($(this).siblings('.cart_message1_content_li2').html().split("￥")[1] * $(this).siblings('.cart_message1_content_li3').children('input').val()));
			var nums = $(this).siblings('.cart_message1_content_li3').children('input').val();
			$.cookie("objs", JSON.stringify(arr), {expires:-1, path:"/"});
			var index = $(this).parent().index();
			arr[index].num = nums;
			$.cookie("objs", JSON.stringify(arr), {expires:7, path:"/"});
			//总价格
			for(var i = 0;i <= $(this).parent().siblings('ul').length;i++){		
				price = '￥' + (price.split('￥')[1] * 1 + $('.cart_message1_content_li4').eq(i).html().split('￥')[1] * 1);
			}
			$('.cart_message1_bottom span').html(price);
			$('.end em').html(price);
	})
		//点击按钮减少数量
		$('.minus').click(function(){
			//num为总数量
			var price = "￥0";
			$(this).siblings('.cart_message1_content_li3').children('input').val($(this).siblings('.cart_message1_content_li3').children('input').val()* 1 - 1);
			if($(this).siblings('.cart_message1_content_li3').children('input').val() < 0){
				$(this).siblings('.cart_message1_content_li3').children('input').val(0);
				$(this).siblings('.cart_message1_content_li3').children('input').val(0)
				for(var i = 0;i <= $(this).parent().siblings('ul').length;i++){		
					if($('.cart_message1_content_li3 input').val() == 0){
						if(i == $(this).parent().siblings('ul').length){
							console.log($(111))
							$('.cart_message1_bottom em').html(0);
							$('.end em').html('￥0');
						}
					}
				}
				//当数量为零时计算价格
				$(this).siblings('.cart_message1_content_li4').html("￥" + ($(this).siblings('.cart_message1_content_li2').html().split("￥")[1] * $(this).siblings('.cart_message1_content_li3').children('input').val()))
				//当数量为零时
				$.cookie("objs", JSON.stringify(arr), {expires:-1, path:"/"});
				var index = $(this).parent().index();
				arr[index].num = 0;
				$.cookie("objs", JSON.stringify(arr), {expires:7, path:"/"});
				return;
			}else{
				num--;
				$('.cart_message1_bottom em').html(num);
			}
			var nums = $(this).siblings('.cart_message1_content_li3').children('input').val();
			$.cookie("objs", JSON.stringify(arr), {expires:-1, path:"/"});
			var index = $(this).parent().index();
			arr[index].num = nums;
			$.cookie("objs", JSON.stringify(arr), {expires:7, path:"/"});
			//计算价格
			$(this).siblings('.cart_message1_content_li4').html("￥" + ($(this).siblings('.cart_message1_content_li2').html().split("￥")[1] * $(this).siblings('.cart_message1_content_li3').children('input').val()))
			//总价格
			for(var i = 0;i <= $(this).parent().siblings('ul').length;i++){		
				price = '￥' + (price.split('￥')[1] * 1 + $('.cart_message1_content_li4').eq(i).html().split('￥')[1] * 1);
			}
			$('.cart_message1_bottom span').html(price);
			$('.end em').html(price);
		})
	}
	$('.cart_message1_content_li5 a').click(function(){
		var index = $(this).parent().parent().index();
		$.cookie("objs", JSON.stringify(arr), {expires:-1, path:"/"});
		arr.splice(index,1);
		$.cookie("objs", JSON.stringify(arr), {expires:7, path:"/"});	
	})
})