class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email
  belongs_to :account
  has_many :reservations
end
