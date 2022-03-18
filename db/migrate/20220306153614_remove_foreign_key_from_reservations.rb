class RemoveForeignKeyFromReservations < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :reservations, :users
    remove_foreign_key :reservations, :rooms
  end
end
