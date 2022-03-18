class User < ApplicationRecord
    has_secure_password

    has_many :reservations
    has_many :rooms, through: :reservations
    belongs_to :account

    validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 50 }
    validates :username, presence: true, uniqueness: true, length: { in: 3..22 }
    validates :email, presence: true, uniqueness: true, email: true
end
