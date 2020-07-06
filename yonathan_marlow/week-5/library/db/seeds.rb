Author.destroy_all

Author.create(:name => 'J.R.R Tolkien', :nationality => 'English', :dob => '1892-01-03', :genre => 'non-fiction', :image => 'https://images.gr-assets.com/authors/1564399522p5/656983.jpg', :wiki => 'https://en.wikipedia.org/wiki/J._R._R._Tolkien')
Author.create(:name => 'J. K. Rowling', :nationality => 'British', :dob => '1965-07-31', :genre => 'non-fiction', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCOOqg_zUm5pAi_ZIbuZu198okQLeuoDaEblNd5AIlvqgkX9QZ&usqp=CAU', :wiki => 'https://en.wikipedia.org/wiki/J._K._Rowling')
Author.create(:name => 'Patrick Rothfuss', :nationality => 'American', :dob => '1973-06-06', :genre => 'Fantasy', :image => 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Patrick-rothfuss-2014-kyle-cassidy.jpg', :wiki => 'https://en.wikipedia.org/wiki/Patrick_Rothfuss')

puts " #{ Author.count } authors created."
