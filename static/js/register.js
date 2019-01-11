$(function(){
	//手机号验证
	// $('.inp1').change(function(){
	// 	phone();
	// })
	//////////////////////////////
	//手机
	$('.signupbox .form-act').eq(0).children('input').blur(function (){
		// var reg=/.{11,}/;
		var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
		if(reg.test($(this).val())){
			// $('.signupbox .reminder').eq(0).html('');


			console.log($(this).val())


			$.get('/checkphone/',{'phone':$(this).val()},function (response) {
				console.log(response)
				$('.LOL').html(response.msg)
				if(response.status){  //可用

				}else{　　//不可用

				}

            })

		}else if($(this).val()==''){
			$('.signupbox .reminder').eq(0).html('手机号不能为空！');

		}else{
			$('.signupbox .reminder').eq(0).html('手机号码格式不对');
		}

	});


	//////////////////////////////////
	//生成随机验证码
	generate();
	var stringNum = $('.identifyingCode').html();
	$('.inp2').change(function(){	
		judge();
	})
	$('.identifyingCode').click(function(){
		stringNum = generate();
		stringNum = $('.identifyingCode').html();
	})
	$('span').click(function(){
		stringNum = generate();
		stringNum = $('.identifyingCode').html();
	})
	//免费获取校验码
	var strings = "";
	$('.bnt1').click(function(){
		strings = "";
		for(var i = 0; i < 4; i++)
		{
			var num = parseInt(Math.random() * 100) % 75 + 48;
			if((num >= 48 && num <= 57) || (num >= 65 && num <= 90) || (num >= 97 && num <= 122)){
				var str = String.fromCharCode(num);
				strings = strings.concat(str);
			}else{
				i--;
			}
		}
		alert(strings);
	})
	$('.inp3').change(function(){
		$('h1').css('top','126px');
		var checkCode = $('.inp3').val();
		if(checkCode.toLowerCase() == strings.toLowerCase()){
			$('h1').html("校验码输入正确");
			$('h1').css('border','1px solid green').css('display','block').css('color','green');
		}else{
			$('h1').html("请输入正确的校验码");
			$('h1').css('border','1px solid red').css('display','block').css('color','red');
		}
	})	
	//密码验证
	$('.inp4').change(function(){
		paw();
	})
	//密码重复输入验证
	$('.inp5').change(function(){
		againPaw();
	})
	//登录
	$('.bnt2').click(function(){
		var arr = $.cookie("obj") ? JSON.parse($.cookie("obj")) : [];
		var arr1 = [];
		if(phone() == true && judge() == true && paw() == true && againPaw() == true){
			//保存账号和密码在游览器中
			var obj1 = {};
			obj1.name = $('.inp1').val();
			obj1.paw = $('.inp4').val();
			arr.push(obj1);
			arr1.push(obj1);
			//JSON解析: 把JSON格式的字符串转换成对象 , JSON.parse()
			//JSON的序列化: 把对象转换成JSON字符串 , JSON.stringify()
			$.cookie("obj", JSON.stringify(arr), {expires:7, path:"/"});
			$.cookie("obj1", JSON.stringify(arr1), {expires:7, path:"/"});
			window.location.href = "home_page.html";
		}else{
			$('h1').html("请把信息填写完整");
			$('h1').css('border','1px solid red').css('display','block').css('color','red');
		}
	})
})
//验证手机号
function phone(){
	var arr = $.cookie("obj") ? JSON.parse($.cookie("obj")) : [];
	var phones = $('.inp1').val();
	var reg = /^1[3458][0-9]{9}/;
	$('h1').css('top','0');
	for(var i = 0;i < arr.length; i++){
		if(arr[i].name == phones){
			$('h1').html("此注册号已经存在");
			$('h1').css('border','1px solid red').css('display','block').css('color','red');
			return false;
		}
	}
	if(reg.test(phones)){
		$('h1').html("手机号输入正确");
		$('h1').css('border','1px solid green').css('display','block').css('color','green');
		return true;
	}else{
		$('h1').html("请输入正确的手机号");
		$('h1').css('border','1px solid red').css('display','block').css('color','red');
		return false;
	}
}
//生成验证码
function generate(){
	var strings = "";
	for(var i = 0; i < 4; i++)
	{
		var num = parseInt(Math.random() * 100) % 75 + 48;
		if((num >= 48 && num <= 57) || (num >= 65 && num <= 90) || (num >= 97 && num <= 122)){
			var str = String.fromCharCode(num);
			strings = strings.concat(str);
			var color = "#" + Math.ceil(Math.random() * 0xFFFFFF).toString(16);
			$('.identifyingCode').css('color',color);
		}else{
			i--;
		}
	}
	var color = "#" + Math.ceil(Math.random() * 0xFFFFFF).toString(16);
	$('.identifyingCode').css('background',color);
	$('.identifyingCode').html(strings);
}
//判断验证码是否正确
function judge(){
	$('h1').css('top','68px');
	var stringNum = $('.identifyingCode').html();
	var stringsNum = $('.inp2').val();
	if(stringNum.toLowerCase() == stringsNum.toLowerCase()){
		$('h1').html("验证码输入正确");
		$('h1').css('border','1px solid green').css('display','block').css('color','green');
		return true;
	}else{
		$('h1').html("请按右图输入验证码，不区分大小写输入错误");
		$('h1').css('border','1px solid red').css('display','block').css('color','red');
		return false;
	}
}
//判断密码是否正确
function paw(){
	var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/;
	var paw = $('.inp4').val();
	$('h1').css('top','184px');
	if(reg.test(paw)){
		$('h1').html("密码输入正确");
		$('h1').css('border','1px solid green').css('display','block').css('color','green');
		return true;
	}else{
		$('h1').html("密码以字母数字特殊字符组合，长度为6-16");
		$('h1').css('border','1px solid red').css('display','block').css('color','red');
		return false;
	}
}
//密码重复输入验证
function againPaw(){
	$('h1').css('top','242px');
	if($('.inp4').val() == $('.inp5').val()){
		$('h1').html("输入正确");
		$('h1').css('border','1px solid green').css('display','block').css('color','green');
		return true;
	}else{
		$('h1').html("两次输入密码不一致");
		$('h1').css('border','1px solid red').css('display','block').css('color','red');
		return false;
	}
}











