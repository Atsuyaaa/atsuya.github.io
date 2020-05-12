/*
#ヘッダー　上部固定
*/

$(function() {
  var $nav = $("#fixed-nav");
  var $container = $('#container');
  var $offsetTop = $nav.offset().top;
  var $fixedMenu = function() {
    if($(window).scrollTop() > $offsetTop) {
      $nav.css({
        "position": 'fixed',
        "top":"0",
        "z-index":"999"
      });
      $container.css({
        "padding-top":"60px"
      });
    } else {
      $nav.css({
        "position":"",
        "top":"",
        "z-index":""
      })
      $container.css({
        "padding-top":''
      });
    }
  }
  $(window).scroll($fixedMenu);
  jQuery('body').bind('touchmove', $fixedMenu);
});
