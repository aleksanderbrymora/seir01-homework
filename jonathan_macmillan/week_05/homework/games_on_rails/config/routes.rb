Rails.application.routes.draw do

  get '/' => 'pages#home'

  get '/magic_8_ball' => 'magic#form'
  get '/magic_8_ball/result' => 'magic#result'

  get '/secret_number' => 'secret#form'
  get '/secret_number/result' => 'secret#result'

  get '/rock_paper_scissors' => 'rps#form'
  get '/rock_paper_scissors/result' => 'rps#result'

end
