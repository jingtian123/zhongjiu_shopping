$(function () {
    // 选择
    $('.carsure').click(function () {
        console.log('选择')
        var cartid = $(this).attr('cartid')

        var $span = $(this).find('span')

        data = {
            'cartid':cartid
        }
        //发起ajax请求
        $.get('/changecartstatus/',data,function (response) {
            console.log('客户端发起修改商品状态')
            console.log(response.status)

            if (response.status){
                if(response.isselect){   //选中
                    console.log('++000000000000')
                    $span.removeClass('no').addClass('glyphicon glyphicon-ok')
                }else{   //未选中
                    console.log('-')
                    $span.removeClass('glyphicon glyphicon-ok').addClass('no')

                }
            }
        })

    })

    //全选
    $('.allgoods').click(function () {
        console.log('all')
        var isall = $(this).attr('isall')
        isall = (isall=='true') ? true : false
        isall = !isall
        $(this).attr('isall',isall)

        if (isall){
            $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
        } else {
            $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
        }

        data = {
            'isall':isall
        }
        $.get('/changecartall/',data,function (response) {
            console.log('改变所有+-+-+-')
            console.log(response)
            if(response.status == 1){
                $('.carsure').each(function () {
                    if (isall){
                        $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
                    }else {
                        $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
                    }
                })
            }
        })
    })
})