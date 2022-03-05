class Review < ApplicationRecord
  belongs_to :reservation

  validates :description, length: { greater_than: 6, less_than: 500 }
  validates :rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
end
