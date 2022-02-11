$(function () {
  function lunbotu() {
    //设置索引值
    let index = 0;
    //初始化轮播图显示第一张照片
    $(".lunbotu li").hide()
    $(".lunbotu li").eq(index).show()
    $(".dian b").eq(index).css("backgroundColor", "#39ffbf")
    //自动轮播图片
    let timer = setInterval(fmove, 3000)

    //按钮点击事件
    $(".left").on("click", () => {
      clearInterval(timer)
      clean()
      index--
      if (index < 0) {
        index = 3
      }
      show()
      timer = setInterval(fmove, 3000)
    })
    $(".right").on("click", () => {
      clearInterval(timer)
      clean()
      index++
      if (index > 3) {
        index = -1
      }
      show()
      timer = setInterval(fmove, 3000)
    })

    //点击小圆点的事件
    $(".dian b").on('click', function () {
      clearInterval(timer)
      clean()
      index = $(this).index()
      show()
      timer = setInterval(fmove, 3000)
    })

    //清除动画
    function clean() {
      $(".lunbotu li").stop().fadeOut();
      $(".dian b").css("backgroundColor", "#fff")
    }
    //开始动画 
    function show() {
      $(".lunbotu li").eq(index).stop().fadeIn();
      $(".dian b").eq(index).css("backgroundColor", "#39ffbf")
    }
    //图片自增
    function fmove() {
      clean()
      index++
      if (index == 4) {
        index = 0
      }
      show();
    }
  }
  //开启轮播图
  lunbotu()
})