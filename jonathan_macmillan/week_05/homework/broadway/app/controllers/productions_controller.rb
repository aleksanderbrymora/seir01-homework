class ProductionsController < ApplicationController
  def index
    @productions = Production.all
  end

  def new
    @production = Production.new
  end

  def create
    production = Production.create production_params
    redirect_to production
  end

  def edit
    @production = Production.find params[:id]
  end

  def update
    production = Production.find params[:id]
    production.update production_params
    redirect_to production
  end

  def show
    @production = Production.find params[:id]
  end

  def destroy
    production = Production.find params[:id]
    production.destroy
    redirect_to productions_path
  end

  private
  def production_params
    params.require(:production).permit(:title, :director, :opening, :closing, :image, :awards, :theatre_id)
  end
end
