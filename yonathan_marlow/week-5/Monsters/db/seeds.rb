Monster.destroy_all

Monster.create :kind => "Dragon", :size => "medium", :color => "green"
Monster.create :kind => "Dragon", :size => "large", :color => "white"
Monster.create :kind => "Godzilla", :size => "extra-large", :weight => 10000
puts "Created #{ Monster.count } monsters."
