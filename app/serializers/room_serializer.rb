class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :description, :amenities
end
