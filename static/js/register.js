$(function () {

    //生成随机验证码
    generate();
    var stringNum = $('.identifyingCode').html();
    $('.inp2').change(function () {
        judge();
    })
    $('.identifyingCode').click(function () {
        stringNum = generate();
        stringNum = $('.identifyingCode').html();
    })
    $('span').click(function () {
        stringNum = generate();
        stringNum = $('.identifyingCode').html();
    })

    //密码验证
    $('.inp4').change(function () {
        paw();
    })
    //密码重复输入验证
    $('.inp5').change(function () {
        againPaw();
    })

    // new_add 手机验证 ajax
    $('.inp1').blur(function () {
        var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        if (reg.test($(this).val())) {   //符合

            console.log($(this).val())

            $.get('/cheakphone/', {'phone': $(this).val()}, function (response) {
                console.log(response)
                $('.lol').html(response.msg)
                if (response.status) {
                    $('.reminder').eq(0).html('小伙子运气可以啊，手机号可用').css('color', 'green');
                } else {
                    $('.reminder').eq(0).html('手机号占用').css('color', 'orange');
                }
            })
            $('.reminder').eq(0).html('');
        } else if ($(this).val() == '') {   //不符合
            $('.reminder').eq(0).html('手机号不能为空！').css('color', 'orange');
        } else {
            $('.reminder').eq(0).html('手机号码格式不对').css('color', 'red');
        }
    })
////////////////////////////////////////
    //生成验证码
    function generate() {
        var strings = "";
        for (var i = 0; i < 4; i++) {
            var num = parseInt(Math.random() * 100) % 75 + 48;
            if ((num >= 48 && num <= 57) || (num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
                var str = String.fromCharCode(num);
                strings = strings.concat(str);
                var color = "#" + Math.ceil(Math.random() * 0xFFFFFF).toString(16);
                $('.identifyingCode').css('color', color);
            } else {
                i--;
            }
        }
        var color = "#" + Math.ceil(Math.random() * 0xFFFFFF).toString(16);
        $('.identifyingCode').css('background', color);
        $('.identifyingCode').html(strings);
    }

//判断验证码是否正确
    function judge() {
        $('h1').css('top', '68px');
        var stringNum = $('.identifyingCode').html();
        var stringsNum = $('.inp2').val();
        if (stringNum.toLowerCase() == stringsNum.toLowerCase()) {
            $('h1').html("验证码输入正确");
            $('h1').css('border', '1px solid green').css('display', 'block').css('color', 'green');
            return true;
        } else {
            $('h1').html("请按右图输入验证码，不区分大小写输入错误");
            $('h1').css('border', '1px solid red').css('display', 'block').css('color', 'red');
            return false;
        }
    }

//判断密码是否正确
    function paw() {
        var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/;
        var paw = $('.inp4').val();
        $('h1').css('top', '184px');
        if (reg.test(paw)) {
            $('h1').html("密码输入正确");
            $('h1').css('border', '1px solid green').css('display', 'block').css('color', 'green');
            return true;
        } else {
            $('h1').html("密码以字母数字特殊字符组合，长度为6-16");
            $('h1').css('border', '1px solid red').css('display', 'block').css('color', 'red');
            return false;
        }
    }

//密码重复输入验证
    function againPaw() {
        $('h1').css('top', '242px');
        if ($('.inp4').val() == $('.inp5').val()) {
            $('h1').html("输入正确");
            $('h1').css('border', '1px solid green').css('display', 'block').css('color', 'green');
            return true;
        } else {
            $('h1').html("两次输入密码不一致");
            $('h1').css('border', '1px solid red').css('display', 'block').css('color', 'red');
            return false;
        }
    }

    // 校验没问题，即发起ajax请求【注册】
    // $('.bnt2').click(function () {
    //     var isRegister = true   // 默认可以注册
    //
    //     $('input').each(function () {
    //         if ($(this).val() == '') {
    //             isRegister = false
    //         }
    //     })
    //
    //     console.log(isRegister)
    //
    //     if (isRegister) {
    //         $('#submit_sent').submit()
    //     }
    // })
    ////////////////////////////////////////
    $('.bnt2').click(function () {

        var stringNum = $('.identifyingCode').html();
        var stringsNum = $('.inp2').val();
        var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        temp = $('.inp4').val()


        if (reg.test($('.inp1').val())) {
            console.log('ok')
            if ((temp != null && temp == $('.inp5').val()) && (stringNum.toLowerCase() == stringsNum.toLowerCase())) {

                console.log(temp)
                $('#submit_sent').submit()

            }
        }

    })


//////////////////////////////////////////////
})

// $('.bnt2').click(function () {
//     if ($('.inp4').val() == $('.inp5').val()) {
//         $('#submit_sent').submit()
//     }
// }













