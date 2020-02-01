$(document).on('turbolinks:load', function(){ 
  var nowDate = new Date();
  var dnumNow = nowDate.getTime();
  var user_start = new Date(gon.checktime.created_at);
  var num = user_start.getTime();
  var passage = (dnumNow - num) / 1000
  var before_bar = (passage / (gon.checktime.total_sec / 1250))
  var bar_width = Math.floor(before_bar)
  var extra_width = bar_width - 1250
  var display_width = bar_width - extra_width
  var before_bar = `<div class="before_bar"></div>`
  if ($('.before_bar').length) {
} else {
  $('.al_bar').append(before_bar)
}
  
  $(function() {
    if (bar_width > 1250){
       $('.before_bar').css('width', `${display_width + 10}px`);
    }
    else{
       $('.before_bar').css('width', `${bar_width}px`);
    }
    
    if (bar_width >= 1250){
      $('.before_bar').css('background', '#BB0000'); 
    }
  });

    var timer1 = null;
    var cnt = 0;
    var res = parseInt($('.before_bar').css('width'));

    function move() {
        cnt++;
 
        if (cnt > 1260 - res) {
            $('.move_bar').css('background', '#BB0000'); 
            $('.before_bar').css('background', '#BB0000'); 
            clearInterval(timer1);  
        }
 
        var move_bar = `<div class="move_bar"></div>`
        $('.al_bar').append(move_bar);
        }

        if (res < 1250) {
        timer1  = setInterval(move, (gon.checktime.total_sec / 1250) * 1000);
        }
    });


 
    
  