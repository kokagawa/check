class ChecktimesController < ApplicationController
  def index
  end  
  
  def new
    @checktime = Checktime.new 
    @checktimes = Checktime.all
    gon.checktimes = @checktimes
    gon.checktime = @checktimes
  end  
  
  def destroy
    @checktime = Checktime.find(params[:id])    
    if @checktime.destroy
      redirect_to root_path
    else
      redirect_to root_path 
    end
  end 

  
  
end  
   
  