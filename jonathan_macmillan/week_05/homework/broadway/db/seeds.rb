Theatre.destroy_all

Theatre.create(:name => 'Vivian Beaumont Theater', :address => '150 W 65th St., New York, NY', :owner => 'Lincoln Center Theater', :image => 'https://d2h3be0wxzd04n.cloudfront.net/uploads/mapplace.images.heroLarge-81c67a7769a931d8cc37620ec0ce8803.jpg', :capacity => 1200)
Theatre.create(:name => 'Broadway Theater', :address => '1681 Broadway, New York, NY', :owner => 'The Schubert Foundation', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/King_Kong_at_the_Broadway_Theater_%2848047447453%29.jpg/1200px-King_Kong_at_the_Broadway_Theater_%2848047447453%29.jpg', :capacity => 1761)
Theatre.create(:name => 'Winter Garden Theatre', :address => '1634 Broadway, New York, NY', :owner => 'The Schubert Foundation', :image => 'https://live.staticflickr.com/7309/9666337577_fb036b6dd5_b.jpg', :capacity => 1526)


puts "#{ Theatre.count } theatres created."


Production.destroy_all

Production.create(:title => 'War Horse', :director => 'Tom Morris and Marianne Elliott', :opening => '2011-04-14', :closing => '2013-01-13', :image => 'https://i.pinimg.com/originals/c9/72/52/c97252c81aed7db6f1c8d2e5225c28a1.jpg', :awards => '5 Tony Awards - including for Best Play')

Production.create(:title => 'King Kong', :director => 'Drew McOnie', :opening => '2018-11-08', :closing => '2019-08-18', :image => 'https://pyxis.nymag.com/v1/imgs/b43/894/af17285f8e5397e74db95a9a21dd2df99a-26-king-kong-alive-poster-3.2x.w710.jpg', :awards => 'Special Tony Award to Creature Technology Company')


puts "#{ Production.count } productions created."
