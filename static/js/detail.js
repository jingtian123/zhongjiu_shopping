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
	// $('.add').click(function(){
	// 	$('.c_i_c_b_left input').val($('.c_i_c_b_left input').val() * 1 + 1);
	// 	if($('.c_i_c_b_left input').val() * 1 >= $('.c_i_c_b_right em').html()){
	// 		$('.c_i_c_b_left input').val($('.c_i_c_b_right em').html());
	// 	}
	// })
	// $('.minus').click(function(){
	// 	$('.c_i_c_b_left input').val($('.c_i_c_b_left input').val() * 1 - 1);
	// 	if($('.c_i_c_b_left input').val() <= 0){
	// 		$('.c_i_c_b_left input').val(0);
	// 	}
	// })
    ///////////
	// 默认减和数字 隐藏 【存在问题】
    // $('.bt-wrapper .glyphicon-minus').hide()
    // $('.bt-wrapper .num').hide()

    // 如果number是有值，表示已经是有添加在购物车 【减号和数字就显示】
    $('.c_i_c_b_left .dist').each(function () {
        var num = parseInt($(this).html())
        if (num){   // 显示
			$(this).next().next().show()
            $(this).show()
			console.log('999')
        } else {    // 隐藏
			$(this).next().next().hide()
            $(this).hide()
			console.log('999')
        }
    })




	/////////////////
    // add new plus
    $('.add').click(function(){
        // console.log('点击+')
        data = {

        }
        var goodsid = $(this).attr('goodsid')
        // 保存当前点击按钮
        var $that = $(this)

        $.get('/addcart/',{'goodsid':goodsid},function (response) {
            console.log('+ajax')
            console.log(response)
            if (response.status == 0){  // 未登录
                window.open('/login/',target='_self')
            }else if(response.status == 1){  // 加操作成功
				$that.next().next().show().html(response.number)
                $that.next().next().next().next().show()
				// $that.nextNode('span').show()
			}
        })
    })


/////////////////////////
    // 减操作 minus
    $('.minus').click(function(){
        // console.log('点击-')

		var goodsid = $(this).attr('goodsid')
		var $that = $(this)
		data = {
        	'goodsid':goodsid
		}

		$.get('/subcart/',data,function (response) {
			console.log('-ajax')
			console.log(response)
			if (response.status == 1){
				if(response.number > 0){
					$that.prev().prev().html(response.number)
				}else {
					$that.prev().prev().hide()
                    $that.hide()
				}
			}

		})
    })
    //////////////

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





})

