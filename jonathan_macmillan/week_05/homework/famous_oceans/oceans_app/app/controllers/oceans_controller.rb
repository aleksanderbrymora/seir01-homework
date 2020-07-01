class OceansController < ApplicationController

  def index
    @oceans = Ocean.all
  end

  def show
    @ocean = Ocean.find params[:id]
  end

  def form
  end

  def create
    ocean = Ocean.create :name => params[:name], :age => params[:age], :image => params[:image], :hustle => params[:hustle]
    redirect_to ocean_path(ocean.id)
  end


  def edit
    @ocean = Ocean.find params[:id]
  end


  def update
    ocean = Ocean.find params[:id]
    ocean.name = params[:name]
    ocean.age = params[:age]
    ocean.image = params[:image]
    ocean.hustle = params[:hustle]
    ocean.save
    redirect_to ocean_path(ocean.id)
  end

  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end

end
