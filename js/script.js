$(".sub").hide();

$(".menu>li").mouseover(function(){
    $(this).children(".sub").stop().fadeIn()
})
$(".menu>li").mouseout(function(){
    $(this).children(".sub").stop().fadeOut()
})

const main=new Swiper('.main',{
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
})

const con2=new Swiper('.con2',{
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

})

const con2_tablet=new Swiper('.con2_tablet',{
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

})

$(".m_menu,.sub_mobile").hide();

$(".close_btn").hide();

$(".m_btn").click(function(){
    $(".m_menu").show();
    $(".close_btn").show();
    $(".m_btn").hide();
})
$(".close_btn").click(function(){
    $(".close_btn").hide();
    $(".m_btn").show();
    $(".m_menu").fadeOut();
})

$(".m_menu>li").click(function(){
    $(this).children(".sub_mobile").fadeIn(300)
})

