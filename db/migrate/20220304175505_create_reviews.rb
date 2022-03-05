class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :description
      t.integer :rating
      t.belongs_to :reservation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
