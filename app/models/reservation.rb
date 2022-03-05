class Reservation < ApplicationRecord
  belongs_to :room
  belongs_to :user
  has_one :review

  validates :start_date, presence: true, before_or_equal_to: :end_date
  validates :end_date, presence: true, after_or_equal_to: :start_date
end
