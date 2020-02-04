$(document).on('turbolinks:load', function(){  
//   function set2fig(num) {
//     var ret;
//     if( num < 10 ) { ret = "0" + num; }
//     else { ret = num; }
//     return ret;
//  }
//  function isNumOrZero(num) {
//     if( isNaN(num) ) { return 0; }
//     return num;
//  }

//   function showCountdown() {  
//   var nowDate = new Date();
//   var dnumNow = nowDate.getTime();

//   var targetDate = new Date(2020, isNumOrZero(gon.checktime.month - 1), isNumOrZero(gon.checktime.day), isNumOrZero(gon.checktime.hour), isNumOrZero(gon.checktime.minute), 0);
//   var dnumTarget = targetDate.getTime();

//   var dlYear  = targetDate.getFullYear();
//   var dlMonth = targetDate.getMonth() + 1;
//   var dlDate  = targetDate.getDate();
//   var dlHour  = targetDate.getHours();
//   var dlMin   = targetDate.getMinutes();
//   var dlSec   = targetDate.getSeconds();
//   var msg1 = "期限の" + dlMonth + "月" + dlDate + "日" + set2fig(dlHour) + "時" + set2fig(dlMin) + "分";

//   var diff2Dates = dnumTarget - dnumNow;
//   if( dnumTarget < dnumNow ) {
//     diff2Dates *= -1;
//   }

//   var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );   
//   diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
//   var dHour  = diff2Dates / ( 1000 * 60 * 60 ); 
//   diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
//   var dMin   = diff2Dates / ( 1000 * 60 );  
//   diff2Dates = diff2Dates % ( 1000 * 60 );
//   var dSec   = diff2Dates / 1000;  
//   var msg2 = Math.floor(dDays) + "日"
//           + Math.floor(dHour) + "時間"
//           + Math.floor(dMin) + "分"
//           + Math.floor(dSec) + "秒";
 
  
//   var msg;
//   if( dnumTarget > dnumNow ) {
//     msg = msg1 + "までは、　あと" + msg2 + "です。";
//   }
//   else {
//     msg = msg1 + "は、既に" + msg2 + "前に過ぎました。";
//   }

//   document.getElementById("contents_right").innerHTML = msg;
//   };

// setInterval(showCountdown,1000);

var al_date = new Date();
  var al_now = al_date.getTime();
  var user_start = new Date(gon.checktime.created_at);
  var al_num = user_start.getTime();
  var passage = (al_now - al_num) / 1000
  var before_bar = (passage / (gon.checktime.total_sec / 1250))
  var bar_width = Math.floor(before_bar)
  var extra_width = bar_width - 1250
  var display_width = bar_width - extra_width
  var before_bar = `<div class="before_bar"></div>`
  console.log(bar_width)
  if ($('.before_bar').length) {
  } else {
  $('.al_bar').append(before_bar)
   }
  
  $(function() {
    if (bar_width >= 1250){
       $('.before_bar').css('width', `${display_width + 10}px`);
    }
    
    else{
       $('.before_bar').css('width', `${bar_width}px`);
    }
    
    if (bar_width >= 1250){
      $('.before_bar').css('background', '#BB0000'); 
      const str2 = $("#hidden4").val();
		$('.space').text(str2);
    }

    if (bar_width >= 900 && bar_width <= 1249 ){
      $('.before_bar').css('background', '#FFFF00'); 
      const str1 = $("#hidden3").val();
		$('.space').text(str1);
    }
  });

    var timer1 = null;
    var cnt = 0;
    var res = parseInt($('.before_bar').css('width'));

    function move() {
        cnt++;
 
        if (cnt >= 1260 - res) {
            $('.move_bar').css('background', '#BB0000'); 
            $('.before_bar').css('background', '#BB0000'); 
            const str2 = $("#hidden4").val();
            $('.space').text(str2);
            clearInterval(timer1);  
        }

        if (cnt >= 900 - res && cnt <= 1259 - res) {
          $('.move_bar').css('background', '#FFFF00'); 
          $('.before_bar').css('background', '#FFFF00'); 
          const str1 = $("#hidden3").val();
          $('.space').text(str1);
        }

        var move_bar = `<div class="move_bar"></div>`
        $('.al_bar').append(move_bar);
        }

        if (res < 1260) {
        timer1  = setInterval(move, (gon.checktime.total_sec / 1250) * 1000);
        }
});