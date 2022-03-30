class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :start_date, presence: true
  validates :end_date, presence: true
  validate :end_date_after_start_date
  validate :start_date_after_today
  validate :dates_available

  private

  def end_date_after_start_date
    if end_date.blank?
      errors.add(:end_date, 'date cannot be blank')
    end

    if start_date.blank?
      errors.add(:start_date, 'date cannot be blank')
    end

    if end_date < start_date
      errors.add(:end_date, "must be after the start date")
    end
 end

 def start_date_after_today
  if start_date < Date.today().to_s
    errors.add(:start_date, "must be later than today\'s date")
  end
 end

#  def dates_available
#   byebug
#   reservations = Reservation.all
#   reservations_for_room = reservations.filter {|res| res.room.id == room_id}
#   date_ranges_for_room = reservations_for_room.map {|res| res.start_date..res.end_date}

#   let masterRangeArray = []
#  end

  def dates_available
    #byebug
    id ? 
    reservations = Reservation.where(["room_id =?", room_id]).where("id !=?", id) :
    reservations = Reservation.where(["room_id =?", room_id])
    
    reservation_range = ((start_date)..(end_date)).to_a
    full_reservations_array = []

    reservations.each {|res| full_reservations_array << ((res.start_date)..(res.end_date)).to_a}

    masterDates = []
    full_reservations_array.each do |range|
      current_test_range = range & reservation_range
      current_test_range.each {|d| masterDates << Date.parse(d)}
    end
    if masterDates.length > 0
      string = masterDates.to_s
      errors.add(:room_id, "#{Room.find(room_id).number} is currently booked for: #{string[1..-2]} ")
    end
  end

  
end