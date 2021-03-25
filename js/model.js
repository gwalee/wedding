$(function(){
  
    // 點擊按鈕，選單縮放
    $("button.btn_switch").on("click", function(){
      $("nav.main_nav").slideToggle();
    });

  });

  $(function(){
    $("li.flip").click(function(){
      $("ol.panel").slideToggle("slow");
      $(".xs1").toggle();
      $(".xs2").toggle();
    });});
  $(function(){
    $("li.flip2").click(function(){
      $("ol.panel2").slideToggle("slow");
      $(".xs1").toggle();
      $(".xs2").toggle();
    });});