// $(function(){
// 	var arr2 = $.cookie("obj2") ? JSON.parse($.cookie("obj2")) : [];
// 	if (arr2.length){
// 		$('.inp1').val(arr2[0].name);
// 		$("input:checkbox").prop("checked", arr2[0].flag);
// 	}
// 	var arr = $.cookie("obj") ? JSON.parse($.cookie("obj")) : [];
// 	$('.bnt1').click(function(){
// 		var arr1 = [];
// 		for(var i = 0;i < arr.length; i++){
// 			if(arr[i].name == $('.inp1').val() && arr[i].paw == $('.inp2').val()){
// 				$('h1').css('display','none');
// 				var obj2 = {};
// 				obj2.name = $('.inp1').val();
// 				obj2.paw = $('.inp2').val();
// 				obj2.flag = $("input:checkbox").prop("checked");
// 				arr1.push(obj2);
// 				$.cookie("obj2", JSON.stringify(arr1), {expires:7, path:"/"});
// 				window.location.href = "home_page.html";
// 			}else{
// 				$('h1').css('top','20px')
// 				$('h1').html("用户名或密码错误");
// 				$('h1').css('border','1px solid red').css('display','block').css('color','red');
// 			}
// 		}
// 	})
//
// })
$(function () {
    $('#coco').blur(function () {
        var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        console.log($(this).val())
        if (reg.test($(this).val())) {//格式ok
            $('.logincheack').eq(0).html('手机号码ok！').css('color', 'green');
        } else if ($(this).val() == '') {  //手机号为空
            $('.logincheack').eq(0).html('手机号不能为空！').css('color', 'orange');
        } else {
            $('.logincheack').eq(0).html('手机号格式不正确！').css('color', 'red');
        }
    })

    $('#pawd').blur(function () {
        var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/;
        console.log($(this).val())
        if (reg.test($(this).val())) {
            $('.loginpawd').eq(0).html('密码格式ok').css('color', 'green');
        } else if ($(this).val() == '') {
            $('.loginpawd').eq(0).html('密码不能为空').css('color', 'orange');
        } else {
            $('.loginpawd').eq(0).html('密码格式不对').css('color', 'red');
        }
    })

    /////////add login cheack
    $('.bnt1').click(function () {
            // console.log('ok')
            var islogin = false
            var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
            var reg2 = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/;
            if ((reg.test($('#coco').val())) && (reg2.test($('#pawd').val()))) {
                islogin = true
                if (islogin) {
                    console.log('ok')
                    $('#loginsubmit').submit()

                }
            }else{
                console.log('错了')
            }

    })


})