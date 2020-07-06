class CreateTheatres < ActiveRecord::Migration[5.2]
  def change
    create_table :theatres do |t|
      t.text :name
      t.text :address
      t.text :owner
      t.text :image
      t.integer :capacity
    end
  end
end
