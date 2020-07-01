class AddTheatreIdToProductions < ActiveRecord::Migration[5.2]
  def change
    add_column :productions, :theatre_id, :integer
  end
end
