class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :room_id
  belongs_to :room
end

# belongs_to :user
#, serializer: ReservationRoomSerializer