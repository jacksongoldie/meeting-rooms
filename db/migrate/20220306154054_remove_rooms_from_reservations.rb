class RemoveRoomsFromReservations < ActiveRecord::Migration[6.1]
  def change
    remove_column :reservations, :room_id
  end
end
