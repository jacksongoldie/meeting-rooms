class DropTableReservations < ActiveRecord::Migration[6.1]
  def change
    drop_table :reservations, force: :cascade
  end
end
