class ChecktimesController < ApplicationController
  def index
    @checktime = Checktime.new
    
  end  
end
