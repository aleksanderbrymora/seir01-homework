Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to => 'pages#home'

get '/eightball' => 'eight#eightball'
get '/rcp' => 'rcp#rcpgame'
get '/secretnumber' => 'secret#secretnumber'

end
