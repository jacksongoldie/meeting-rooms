class Room < ApplicationRecord
    has_many :reservations #include reviews?
    has_many :users, through: :reservations

end
