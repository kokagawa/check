class ChecktimesController < ApplicationController
  before_action :authenticate_user!, only: [:show, :create, :edit, :update, :destroy]
  def index
  end  
  
  def new
    @checktime = Checktime.new 
    @checktimes = Checktime.all
    if user_signed_in?
      @user_checktimes = Checktime.where(user_id: current_user.id)
    end  
    gon.checktimes = @checktimes
    gon.checktime = @checktimes
    if user_signed_in?
      gon.current_user_id = current_user.id
    end
  end  

  def create
    @checktime = Checktime.new(checktime_params) 
     time = Time.now
     s_time = time.to_i
     plan = time.change(year:2020, month:@checktime.month, day:@checktime.day, hour:@checktime.hour, min:@checktime.minute, sec: 0 ) 
     s_plan = plan.to_i
     @checktime.total_sec = s_plan - s_time
     @checktime.user_id = current_user.id
     if @checktime.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json
      end
      else
      redirect_to root_path 
      end
  end

  def show
    @checktime = Checktime.find(params[:id])    
    @checktimes = Checktime.all
    gon.checktime = @checktime
    gon.checktimes = @checktimes
  end  

  def edit
    @checktime = Checktime.find(params[:id])
  end  

  def update 
    @checktime = Checktime.find(params[:id])
    @checktime.update(checktime_params)
    redirect_to root_path, data: {confirm: "更新しました"}
  end

  def destroy
    @checktime = Checktime.find(params[:id])    
    if @checktime.destroy
      redirect_to root_path
    else
      redirect_to root_path 
    end
  end 

  private

  def checktime_params
      params.require(:checktime).permit(:plan, :month, :day, :hour, :minute, :memo)
  end
end

  
  
  
   
  