class CreateProductions < ActiveRecord::Migration[5.2]
  def change
    create_table :productions do |p|
      p.text :title
      p.text :director
      p.date :opening
      p.date :closing
      p.text :image
      p.text :awards
    end
  end
end
