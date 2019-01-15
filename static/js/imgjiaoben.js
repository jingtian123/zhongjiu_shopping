$(function () {
    $('img').each(function () {
        // 路径
        var imgPath = $(this).attr('src')

        // 拼接
        // {% static 'img/research_ico.png' %}
        imgPath= "{% static '" + imgPath + "' %}"

        // 设置
        $(this).attr('src', imgPath)
    })

    // 第一步: 将整个body输出
    // 第二步: 复制输出的内容
    // 第三步: 替换 body
    // 第四步: 删除脚本
    console.log($('body').html())
})