$(document).on('turbolinks:load', function(){
  function buildHTML(user_time) {
     var html = `<div class='plans' data-id="${user_time.id}">             
                     <div class='plans_name'>
                       <a href="/alarms/${user_time.id}">
                       ${user_time.plan}
                       </a>
                     </div>                
                   <div class='plans_time'>
                    ${user_time.month}月${user_time.day}日&nbsp;${user_time.hour}:${user_time.minute}
                    <a data-confirm="削除しますか？"  data-method"delete" href="checktimes/${user_time.id}"}>
                      <div class='remove_btn'>この予定を削除</div>
                    </a>
                   </div>
                </div>`
  return html;
  }
  
  $('#new_checktime').on('submit', function(e){
    e.preventDefault();
    var u_date = new FormData(this);
    var url = "/alarms";
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
      $('.plans_title').text(`現在の予定 ${gon.checktimes.length + 1}件`);
      console.log(gon.checktimes.length) 
      
    })
    
    .fail(function(data){
      alert('エラーが発生したため予定を追加出来ませんでした。');
    })
    .always(function(data){
      $('.btn').prop('disabled', false);//ここで解除している
      
    })
  })



  $('.plans_base').on('click','.remove_btn', function(e){
    e.preventDefault(); 
    e.stopPropagation();
    var result = confirm('この予定を削除しますか？');
    if( result ) {
        var ddd = $(this).parents('.plans')
        var sss = $(this).parents('.plans').data('id');
        var url = `checktimes/${sss}`;
        $.ajax({  
          url: url,
          type: 'DELETE',
          data: sss,
          dataType: 'json',
          processData: false,
          contentType: false,
          beforeSend: function (xhr) { xhr.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content')) }
        })
        .done(function() {
          $(ddd).remove()
          alert('予定を削除しました。');
          
        })
        .always(function(data){
          $('.btn').prop('disabled', false);//ここで解除している
        })
 
    }
    else {
      }
   })

   
   var i = 0;
   $.each(gon.checktimes, function(index, value) {
        var a_date = new Date(); 
        var a_num = a_date.getTime();
        var user_date = new Date(2020, value.month - 1,  value.day,  value.hour,  value.minute);
        var user_sec = user_date.getTime();
        var user_time = new Date(value.created_at)
        var t_sec = user_time.getTime();
        var pass = (a_num - t_sec) * 1000 
        
        const ind = i;
         
         if(a_num > user_sec) {
            $('#plans_' + ind).css('background', 'black')
            i++;
          
           }
        else if (pass * value.total_sec /1250 > 950 && pass * value.total_sec /1250 < 1250) {
          $('#plans_' + ind).css('background', '#CC0000')
          i++;
        }
        else {
          i++;
          
        }
      })
});