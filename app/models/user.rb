class User < ApplicationRecord
    has_many :reservations
    has_many :rooms, through: :reservations

    validates :name, presence: true, uniqueness: true, length: { greater_than: 6 }
    validates :email, presence: true, uniqueness: true, email: true
end
