class AlarmsController < ApplicationController
  def index
   
  end 

  def create
    @checktime = Checktime.new(checktime_params)
    if @checktime.save
      redirect_to alarms_path
    else
      render '/'
    end
  end 

  private

  def checktime_params
      params.require(:checktime).permit(:text, :month, :day, :hour, :minute)
  end
end
