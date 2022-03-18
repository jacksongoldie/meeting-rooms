class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :description, :amenities, :image_url
  has_many :reservations
end
