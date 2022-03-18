class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :start_date, :end_date, presence: true
  validate :end_date_after_start_date
  validate :start_date_after_today

  private

  def end_date_after_start_date
    return if end_date.blank? || start_date.blank?

    if end_date < start_date
      errors.add(:end_date, "must be after the start date")
    end
 end

 def start_date_after_today
  if start_date < Date.today().to_s
    errors.add(:start_date, "must be later than today\'s date")
  end
 end

end