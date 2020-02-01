$(document).on('turbolinks:load', function(){ 
  if (window.name != "xyt"){
      location.reload();
      window.name = "xyt";
      }
      else{
       window.name = "xyz";  
      }
      });

$(document).on('turbolinks:load', function(){  
  function set2fig(num) {
    // 数値が1桁だったら2桁の文字列にして返す
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
 }
 function isNumOrZero(num) {
    // 数値でなかったら0にして返す
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
  var msg1 = "期限の" + dlYear + "/" + dlMonth + "/" + dlDate + " " + set2fig(dlHour) + ":" + set2fig(dlMin) + ":" + set2fig(dlSec);

  var diff2Dates = dnumTarget - dnumNow;
  if( dnumTarget < dnumNow ) {
    // 期限が過ぎた場合は -1 を掛けて正の値に変換
    diff2Dates *= -1;
  }

  var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );   // 日数
  diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
  var dHour  = diff2Dates / ( 1000 * 60 * 60 );   // 時間
  diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
  var dMin   = diff2Dates / ( 1000 * 60 );   // 分
  diff2Dates = diff2Dates % ( 1000 * 60 );
  var dSec   = diff2Dates / 1000;   // 秒
  var msg2 = Math.floor(dDays) + "日"
          + Math.floor(dHour) + "時間"
          + Math.floor(dMin) + "分"
          + Math.floor(dSec) + "秒";
 
  // 表示文字列の作成
  var msg;
  if( dnumTarget > dnumNow ) {
    // まだ期限が来ていない場合
    msg = msg1 + "までは、あと" + msg2 + "です。";
  }
  else {
    // 期限が過ぎた場合
    msg = msg1 + "は、既に" + msg2 + "前に過ぎました。";
  }

  // 作成した文字列を表示
  document.getElementById("contents_right").innerHTML = msg;
  };
// 1秒ごとに実行
setInterval(showCountdown,1000);
});