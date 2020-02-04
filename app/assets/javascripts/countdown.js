$(document).on('turbolinks:load', function(){  
  function set2fig(num) {
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
 }
 function isNumOrZero(num) {
    if( isNaN(num) ) { return 0; }
    return num;
 }

  function showCountdown() {  
  var nowDate = new Date();
  var dnumNow = nowDate.getTime();

  var targetDate = new Date(2020, isNumOrZero(gon.checktime.month - 1), isNumOrZero(gon.checktime.day), isNumOrZero(gon.checktime.hour), isNumOrZero(gon.checktime.minute), 0);
  var dnumTarget = targetDate.getTime();

  var dlYear  = targetDate.getFullYear();
  var dlMonth = targetDate.getMonth() + 1;
  var dlDate  = targetDate.getDate();
  var dlHour  = targetDate.getHours();
  var dlMin   = targetDate.getMinutes();
  var dlSec   = targetDate.getSeconds();
  var msg1 = "期限の" + dlMonth + "月" + dlDate + "日" + set2fig(dlHour) + "時" + set2fig(dlMin) + "分";

  var diff2Dates = dnumTarget - dnumNow;
  if( dnumTarget < dnumNow ) {
    diff2Dates *= -1;
  }

  var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );   
  diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
  var dHour  = diff2Dates / ( 1000 * 60 * 60 ); 
  diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
  var dMin   = diff2Dates / ( 1000 * 60 );  
  diff2Dates = diff2Dates % ( 1000 * 60 );
  var dSec   = diff2Dates / 1000;  
  var msg2 = Math.floor(dDays) + "日"
          + Math.floor(dHour) + "時間"
          + Math.floor(dMin) + "分"
          + Math.floor(dSec) + "秒";
 
  
  var msg;
  if( dnumTarget > dnumNow ) {
    msg = msg1 + "までは、　あと" + msg2 + "です。";
  }
  else {
    msg = msg1 + "は、既に" + msg2 + "前に過ぎました。";
  }

  document.getElementById("contents_right").innerHTML = msg;
  };

setInterval(showCountdown,1000);
});