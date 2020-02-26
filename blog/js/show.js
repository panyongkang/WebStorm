
$(function () {
    //顶部选项卡切换效果
    $('.nav_ul li').click(function () {
        $(this).addClass('active')//点击哪个就添加active类
        $(this).siblings().removeClass('active')//siblings是给兄弟元素删除active类的
    })

    //顶部侧栏点击出现和隐藏
    $('.sidler_btn').click(function () {
        showSlider();
    })
    $('.mask').click(function () {
        hideSlider();
    })

    function showSlider() {
        $('.mask').fadeIn();//jquery里面慢慢出来的函数
        $('.silder').css('right', 0)
    }
    function hideSlider() {
        $('.mask').fadeOut()
        $('.silder').css('right',-300)
    }
//回到顶部图标效果
    $(window).scroll(function () {
        if ($(window).scrollTop()>100){
            $('.top').css('display','block')
        }else {
            $('.top').css('display','none')
        }
    })

    $('.top').click(function () {
        $('body,html').animate({
            scrollTop:0
        },300)

    })








})