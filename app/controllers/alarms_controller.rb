class AlarmsController < ApplicationController
  def index
   @checktime = Checktime.all
   gon.checktime = @checktime
  end

  def show
    @checktime = Checktime.find(params[:id])    
    @checktimes = Checktime.all
    gon.checktime = @checktime
    gon.checktimes = @checktimes
  end
   
  

  def create
    @checktime = Checktime.new(checktime_params)
     
     time = Time.now
     s_time = time.to_i
     plan = time.change(year:2020, month:@checktime.month, day:@checktime.day, hour:@checktime.hour, min:@checktime.minute, sec: 0 ) 
     s_plan = plan.to_i
     @checktime.total_sec = s_plan - s_time
     if @checktime.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json
      end
      else
      redirect_to root_path 
      end
  end
    

  private

  def checktime_params
      params.require(:checktime).permit(:plan, :month, :day, :hour, :minute, :memo)
  end
end
