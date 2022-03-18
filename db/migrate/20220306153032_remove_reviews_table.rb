class RemoveReviewsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :reviews
  end
end
