# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Ocean.destroy_all

Ocean.create :name => 'Danny Ocean', :age => '45', :hustle => 'Con Man'
Ocean.create :name => 'Tess Ocean', :age => '40', :hustle => 'Con Woman'
Ocean.create :name => 'Rusty Ryan', :age => '40', :hustle => 'Operations'


puts "#{Ocean.count} planets available."
