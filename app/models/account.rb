class Account < ApplicationRecord
    has_many :users
    has_many :reservations, through: :users
end
