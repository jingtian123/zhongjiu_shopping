$(function () {
    $('.pay').click(function () {
        console.log('点击支付1')
        var identifier = $(this).attr('identifier')
        console.log('点击支付2')
        var data = {
            'identifier':identifier
        }
        $.get('/pay/', data, function (response) {
            console.log('pay ajax')
            console.log(response)
            if (response.status == 1){
                window.open(response.alipayurl, target='_self')
            }
        })
    })
})