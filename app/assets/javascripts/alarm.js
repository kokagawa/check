$(function () {
  var nowTime = new Date()
  var nowHour = nowTime.getHours();
  
  var clk = '<div class="clk">nowHour</div>'
  
  $('.bar').append(nowHour)
  
  var move_bar = '<div class="move_bar"></div>'
  var move = function(){
    $('.bar').append(move_bar)
  }
  
  
  
})
