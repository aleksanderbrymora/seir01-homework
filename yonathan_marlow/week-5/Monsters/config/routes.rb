Rails.application.routes.draw do

  root :to => 'monsters#index'
  get '/monsters' => 'monsters#index'
  get '/monsters/new' => 'monsters#new', :as => 'new_monster'
  post '/monsters' => 'monsters#create'
  get '/monsters/:id' => 'monsters#show', :as => 'monster'
  get 'monsters/:id/edit' => 'monsters#edit', :as => 'edit_monster'
  post '/monsters/:id' => 'monsters#update'
  delete '/monsters/:id' => 'monsters#destroy_all'
end
