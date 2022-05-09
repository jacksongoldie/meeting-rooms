class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :room_id
  belongs_to :room, serializer: ReservationRoomSerializer
end

# belongs_to :user
