class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email
  belongs_to :account
  has_many :reservations

  def reservations
    object.reservations.order(start_date: :asc)
  end
end
