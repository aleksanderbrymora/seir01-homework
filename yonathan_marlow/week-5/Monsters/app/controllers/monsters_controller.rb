class MonstersController < ApplicationController

  def index
    @monsters = Monster.all
  end

  def show
    @monster = Monster.find params[:id]
  end

  def new
  end

  def create
    monster = Monster.create :kind => params[:kind],:size => params[:size],:color => params[:color],:image => params[:image],:weight => params[:weight]
    redirect_to monster_path(monster.id)
  end

  def edit
    @monster = Monster.find params[:id]
  end

  def update
    monster = Monster.find params[:id]
    #update all the fields
    monster.kind = params[:kind]
    monster.size = params[:size]
    monster.color = params[:color]
    monster.image = params[:image]
    monster.weight = params[:weight]
    #save the changes
    monster.save
    #redirect to the show page
    redirect_to monster_path(monster.id)
  end

  def destroy_all
  #find planet
  monster = Monster.find params[:id]
  #destroy planet
  monster.destroy
  redirect_to monsters_path
  end

end
