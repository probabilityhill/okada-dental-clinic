$(function() {
  $('.atf__imgs').slick({
    arrows: false,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    centerMode: true, //要素を中央寄せ
    centerPadding:'20vw', //両サイドの見えている部分のサイズ
    autoplay:true, //自動再生
    responsive: [{
     breakpoint: 480,
      settings: {
        centerMode: false,
        fade: true
      }
    }]
  });
});
