class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :room
  belongs_to :user
  belongs_to :room
end
