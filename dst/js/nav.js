//gnavToggleの動き
$(document).ready(function(){
    $(".gnavToggle").click(function(){
        $(".navContent").fadeToggle(200);
       $('.gnavToggle__btn--open').toggleClass('gnavToggle__btn--close');
    });
});

//headerNavPcのサブメニュー開閉（hover）
$(function() {
  $('.headerNavPc__menu').children('.headerNavPc__menu__item').hover(function(){
    $(this).children('.headerNavPc__menu__item__submenu').stop().slideToggle(180);
  });
});

//navContentのサブメニュー開閉（click）
$(function() {
  $('.navContent__menu').children('.navContent__menu__item').click(function(){
    $(this).children('.navContent__menu__item__submenu').stop().slideToggle(180);
  });
});
