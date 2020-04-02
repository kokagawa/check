class ApplicationController < ActionController::Base
  require 'date'
  def after_sign_out_path_for(resource)
    logout_path 
  end
end
