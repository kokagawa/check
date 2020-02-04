class DescriptionController < ApplicationController
  def index
    @checktimes = Checktime.all
  end
end
