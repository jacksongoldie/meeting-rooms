class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date
  has_one :room_id
  has_one :user_id
end
