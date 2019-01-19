$(function () {
    // 选择
    $('.carsure').click(function () {
        console.log('选择')
        var cartid = $(this).attr('cartid')

        var $span = $(this).find('span')

        data = {
            'cartid': cartid
        }
        //发起ajax请求
        $.get('/changecartstatus/', data, function (response) {
            console.log('客户端发起修改商品状态')
            console.log(response.status)

            if (response.status) {
                if (response.isselect) {   //选中
                    console.log('++000000000000')
                    $span.removeClass('no').addClass('glyphicon glyphicon-ok')
                } else {   //未选中
                    console.log('-')
                    $span.removeClass('glyphicon glyphicon-ok').addClass('no')

                }
                total()
            }
        })

    })

    //全选
    $('.allgoods').click(function () {
        console.log('all')
        var isall = $(this).attr('isall')
        isall = (isall == 'true') ? true : false
        isall = !isall
        $(this).attr('isall', isall)

        if (isall) {
            $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
        } else {
            $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
        }

        data = {
            'isall': isall
        }
        $.get('/changecartall/', data, function (response) {
            console.log('改变所有+-+-+-')
            console.log(response)
            if (response.status == 1) {
                $('.carsure').each(function () {
                    if (isall) {
                        $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
                    } else {
                        $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
                    }
                })
                total()
            }

        })
    })


    // 购物车加减
    //如果number是有值，表示已经是有添加在购物车 【减号和数字就显示】
    $('.po .cartnum').each(function () {
        var num = parseInt($(this).html())
        if (num) {   // 显示
            $(this).next().next().find('.jian').show()
            $(this).show()

        } else {    // 隐藏
            $(this).hide()
            $(this).next().next().find('.jian').hide()
            $('.zongjia').parseInt(html())

        }
    })
    //////////////////////
    // add
    $('.addgoods').click(function () {
        // console.log('购物车点击+')
        data = {}
        var goodsid = $(this).attr('goodsid')
        var $that = $(this)
        console.log(goodsid)

        $.get('/addcart/', {'goodsid': goodsid}, function (response) {
            console.log('购物车点击++++++++++++++')
            // console.log('+ajax')
            // console.log(response)
            if (response.status == 0) {
                // window.open('/login/', target = '_self')
            } else if (response.status == 1) {
                $that.parent().prev().prev().show().html(response.number)
                $that.next().next().show()
            }
            total()
        })
    })

    /////////////////////购物车减
    $('.jian').click(function () {
        // console.log('购物车点击---')
        data = {
            'goodsid': goodsid
        }
        var goodsid = $(this).attr('goodsid')
        var $that = $(this)
        // console.log(goodsid)

        $.get('/subcart/', {'goodsid': goodsid}, function (response) {
            console.log('购物车点击-----')
            // console.log('ajax--')
            // console.log(response)
            if (response.status == 1) {    // 操作成功
                if (response.number > 0) {   // 改变个数
                    $that.parent().prev().prev().show().html(response.number)

                } else {
                    // $that.prev().prev().hide()
                    $that.parent().prev().prev().show().html('0')
                    $that.hide()
                }
            }
            total()
        })
    })

//////// 计算总数/////////////////////////
    function total() {
        var sum = 0

        $('.po').each(function () {
            var $that = $(this)
            var $findok = $(this).find('.glyphicon-ok')
            if($findok.length){
                var num =$that.find('.cartnum').html()
                // console.log("num:",num)
                // var price = $('.price2').html()
                var price = $that.find('.price2').html()
                // console.log("price:",price)
                sum += parseInt(num) * parseInt(price)
                // console.log("sum:",sum)
            }
        })
        // 设置显示
        $('.zongjia').html(parseInt(sum))
    }
/////////////////////////////////////////

    // 下单
    $('.sure-order').click(function () {
        console.log('++++点击下单++++')

        $.get('/generateorder/',function (response) {
            console.log(response)
            if(response.status == 1){
                console.log('xiaaaaaaaaaaaaaaaaaaaaaaa')
                window.open('/orderdetail/?identifier=' + response.identifier,target='_self')
            }

        })
    })

})
