class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email
  has_many :reservations

  def reservations
    object.reservations.order(start_date: :asc)
  end
end


