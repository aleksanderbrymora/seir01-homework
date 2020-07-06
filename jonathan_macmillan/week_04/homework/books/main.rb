require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'



get '/' do
  erb :home
end

get '/result' do

  @book = params[:book_name]
  begin
  info = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{@book}"
  @book_url = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @book_description = info["items"][0]["volumeInfo"]["description"]
  @book_title = info["items"][0]["volumeInfo"]["title"]
  rescue
    redirect to('/rescue')
  end
  # binding.pry
  erb :result   #this has to be the last line of this result code
end


get '/rescue' do
  @book = params[:book_name]
  erb :rescue
end
