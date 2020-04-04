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
  function buildHTML(user_time) {
     var html = `<div class='plans' data-id="${user_time.id}">             
                     <div class='plans_name'>
                       <a href="/checktimes/${user_time.id}">
                       ${user_time.plan}
                       </a>
                     </div>                
                   <div class='plans_time'>
                    ${user_time.month}月${user_time.day}日&nbsp;${user_time.hour}:${user_time.minute}
                    <a href="checktimes/${user_time.id}/edit"}>
                    <div class='edit_btn'>この予定を変更</div>
                    </a>
                    <a data-confirm="削除しますか？"  data-method = "delete" href="checktimes/${user_time.id}"}>
                      <div class='remove_btn'>この予定を削除</div>
                    </a>
                   </div>
                </div>
                <div class="check_msg"></div>`
  return html;
  }
  
  $('#new_checktime').on('submit', function(e){
    e.preventDefault();
    var u_date = new FormData(this);
    var url = "/checktimes";
    $.ajax({  
      url: url,
      type: 'POST',
      data: u_date,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.plans_base').append(html);
      $('#checktime_text').val(''); 
      $('#checktime_month').val('');
      $('#checktime_day').val(''); 
      $('#checktime_minute').val(''); 
      $('#checktime_hour').val('');
      $('.plans_base').animate({ scrollTop: $('.plans_base')[0].scrollHeight });
      alert('予定を追加しました')
      $('.plans_title').text(`現在の予定 ${gon.checktimes.length += 1}件`);
      
    })
    
    .fail(function(data){
      var c_u_id = gon.current_user_id;
      if(c_u_id != null) {
        alert('エラーが発生したため予定を追加出来ませんでした。');  
      }else {
        alert('ログインしてください。');   
      }
     
      
    })
    .always(function(data){
      $('.btn').prop('disabled', false);
      
    })
  })



  
   
   var i = 0;
   $.each(gon.checktimes, function(index, value) {
        var a_date = new Date(); 
        var a_num = a_date.getTime();
        var user_date = new Date(2020, value.month - 1,  value.day,  value.hour,  value.minute);
        var user_sec = user_date.getTime();
        var user_time = new Date(value.updated_at)
        var t_sec = user_time.getTime();
        var pass = (a_num - t_sec) / 1000
        var v_sec = (user_sec - t_sec) / 1000 
        const ind = i;
         
         if(pass / (v_sec / 1250) > 900 && pass / (v_sec /1250) < 1260) {
          $('#plans_' + ind).css('background', '#CC0000')
          const str3 = $("#hidden1").val();
          $('#check_msg_' + ind).text(str3);
          i++;
           }
        else if (a_num > user_sec) {
          $('#plans_' + ind).css('background', 'black')
          const str4 = $("#hidden2").val();
          $('#check_msg_' + ind).text(str4);
          i++;
        }
        else {
          i++;
          }
      })
});