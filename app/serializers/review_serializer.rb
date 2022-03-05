class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating
  has_one :user
  has_one :reservation
end
