#Meeting Rooms

A site to showcase meeting rooms available to be reserved by users.

#Rooms
Attributes: name, number, description, amenities

has_many reservations
has_many users, through reservations

#Users
Attributes: name, email

#Reservations
Attributes: room_id, user_id, start_date, end_date

belongs_to user
belongs_to room
has_many reviews

#Reviews
Attributes: reservations, user

belongs_to reservation
belongs_to user