$(function(){
  var time = 0;
  function keepChecking(){
    var id = setTimeout(keepChecking, 1000);
    if(time == 2){
      if(!($(".ad-banner").is(":visible"))){
        $(".ad-modal").fadeIn();
        $('html').attr('oncontextmenu', 'return false');
        $('body').attr('oncontextmenu', 'return false').attr('onkeydown', 'return false').attr('onmousedown', 'return false');
        time = 0;
        $("body").addClass("avoid-page-scroll");
      }
      clearTimeout(id);
    }
    time++;
  }
  keepChecking();
  $(".ad-modal .adb-btn").click(function(){
    $("body").removeClass("avoid-page-scroll");
    location.reload();
  });
});
