class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :image => params[:image], :country => params[:country], :height => params[:height], :climber => params[:climber]
    redirect_to mountain_path(mountain.id)
  end

end
