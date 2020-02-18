// 实现自动轮播图片效果
var i=0;
var time;
$(document).ready(function () {
    $('.ig').eq(0).show().siblings().hide();
    timer();

    //点击实现切换
    $('.left-button').click(function () {
        clearInterval(time);
        if (i == 0) {
            i==4;
        }
        i--;
        show();
        timer();
    })
    $('.right-button').click(function () {
        clearInterval(time);

        if (i == 3) {
            i=-1;
        }
        i++;
        show();
        timer();
    })
});
// 选择器
function timer() {
    //开关
    time=setInterval(function () {
        show();
        i++;
        if (i==4) {
            i=0
        }

    },2000)
}

function show() {
    // 出现和消失的时间
    $('.ig').eq(i).fadeIn(300).siblings().fadeOut(300)
}