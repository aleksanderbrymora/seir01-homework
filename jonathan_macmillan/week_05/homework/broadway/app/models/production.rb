class Production < ActiveRecord::Base
  belongs_to :theatre, :optional => true 
end
