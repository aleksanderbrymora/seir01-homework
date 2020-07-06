Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # We're gonna need 7 routes

  root :to => 'oceans#index'
  get '/oceans' => 'oceans#index'
  post '/oceans' => 'oceans#create'

  get '/oceans/new' => 'oceans#form', :as => 'new_ocean'

  get '/oceans/:id' => 'oceans#show', :as => 'ocean'
  post '/oceans/:id' => 'oceans#update'
  delete '/oceans/:id' => 'oceans#destroy'

  get '/oceans/:id/edit' => 'oceans#edit', :as => 'edit_ocean'

end





# https://i.insider.com/5a392480d03e2de6028b4574?width=1100&format=jpeg&auto=webp George Clooney image
