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
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json
      end
    else
      redirect_to root_path 
    end
  end 

  
  
end  
   
  