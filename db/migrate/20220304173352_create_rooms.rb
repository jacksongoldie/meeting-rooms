class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :number
      t.text :description
      t.string :amenities

      t.timestamps
    end
  end
end
