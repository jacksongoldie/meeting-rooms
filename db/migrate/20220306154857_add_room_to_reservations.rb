class AddRoomToReservations < ActiveRecord::Migration[6.1]
  def change
    add_reference :reservations, :room, null: false, foreign_key: true
  end
end
