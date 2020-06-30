require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'



get '/' do
  erb :home
  # binding.pry
end

#INDEX
get '/cocktails' do
  @cocktails = query_db 'SELECT * FROM cocktails'
  erb :cocktails_index
end

# NEW
get '/cocktails/new' do
  erb :cocktails_new
end

#CREATE
post '/cocktails' do
  query = "INSERT INTO cocktails (name, base_spirit, ingredients, recipe, image) VALUES ('#{params[:name]}', '#{params[ :base_spirit ]}', '#{params[:ingredients]}', '#{params[:recipe]}','#{params[:image]}')"
  query_db query
  redirect to('/cocktails')
end


#SHOW
get '/cocktails/:id' do
  @cocktail = query_db "SELECT * FROM cocktails WHERE id =#{ params[ :id ]}"
  @cocktail = @cocktail.first
  erb :cocktails_show
end


#EDIT UPDATE
post '/cocktails/:id' do
  query = "UPDATE cocktails SET name='#{ params[:name] }', base_spirit='#{ params[:base_spirit] }', ingredients='#{ params[:ingredients] }', recipe='#{ params[:recipe] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/cocktails/#{params[:id]}")
end


#EDIT
get '/cocktails/:id/edit' do
  @cocktail = query_db "SELECT * FROM cocktails WHERE id =#{ params[ :id ]}"
  @cocktail = @cocktail.first
  # binding.pry
  erb :cocktails_edit
end

#DELETE
get '/cocktails/:id/delete' do
  query = "DELETE FROM cocktails WHERE id =#{ params[ :id ]}"
  query_db query
  redirect to("/cocktails")
end









def query_db (sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
