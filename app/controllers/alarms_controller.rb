class AlarmsController < ApplicationController
  def index
   @checktime = Checktime.all
   gon.checktime = @checktime
  end

  def show
    @checktime = Checktime.find_by(params[:id]) 
    if @checktime.present?
    else
      redirect_to root_path 
    end  
    @checktimes = Checktime.all
    gon.checktime = @checktime
    gon.checktimes = @checktimes
  end
   
  

  def create
    @checktime = Checktime.new(checktime_params)
     time = Time.now
     plan = time.change(year:2020, month:@checktime.month, day:@checktime.day, hour:@checktime.hour, min:@checktime.minute, sec: 0 ) 
     @checktime.total_sec = plan - time 
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
      params.require(:checktime).permit(:text, :month, :day, :hour, :minute)
  end
end
