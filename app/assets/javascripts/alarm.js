$(document).on('turbolinks:load', function(){ 
  
 
   if (window.name != "xyt"){
       location.reload();
       window.name = "xyt";
       
       console.log(window.name)
       }
       else{
        window.name = "xyz";  
       }
       console.log(window.name)

});

$(document).on('turbolinks:load', function(){ 
  var nowDate = new Date();
  console.log(nowDate)
  var dnumNow = nowDate.getTime();
  console.log(dnumNow)
  var user_start = new Date(gon.checktime.created_at);
  console.log(user_start)
  var num = user_start.getTime();
  console.log(num)
  var passage = (dnumNow - num) / 1000
  console.log(passage)
  var before_bar = (passage / (gon.checktime.total_sec / 1250))
  console.log(before_bar)
  var bar_width = Math.floor(before_bar)
  console.log(bar_width)
  var extra_width = bar_width - 1250
  var display_width = bar_width - extra_width
  console.log(bar_width)
  var before_bar = `<div class="before_bar"></div>`
  if ($('.before_bar').length) {
} else {
  $('.al_bar').append(before_bar)
}
  
  $(function() {
    if (bar_width > 1250){
       $('.before_bar').css('width', `${display_width}px`);
    }
    else{
       $('.before_bar').css('width', `${bar_width}px`);
    }
    
    if (bar_width >= 1250){
      $('.before_bar').css('background', '#BB0000'); 
    }
  });
// });
  
 
   
// $(document).on('turbolinks:load', function(){
    var timer1 = null;
    var cnt = 0;
    var res = parseInt($('.before_bar').css('width'));
      console.log(res)

    function move() {
 
        cnt++;
 
        if (cnt > 1260 - res) {
            // 5回以上表示したら、タイマーを停止する
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
        console.log(res)
        console.log(gon.checktime.total_sec)
     

      
});
 
    
  