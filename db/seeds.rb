# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Seeding...'
Reservation.destroy_all
User.destroy_all
Room.destroy_all
Account.destroy_all

#Accounts
Account.create!(business_name: 'Candle Co.', address: '201 E. Park Ave.')
Account.create!(business_name: 'Building BlocksRUs', address: '202 E. Park Ave.')

#Users
goldie = User.create!(name: 'Goldie Jackson', email: 'goldie@goldie.com', username: 'goldie', password: 'grj1987', account_id: Account.first.id)
ilyas = User.create!(name: 'Ilyas Rey', email: 'ilyas@goldie.com', username: 'ilyas', password: 'irj2011', account_id: Account.second.id)
louis = User.create!(name: 'Louis Rose', email: 'louis@goldie.com', username: 'louis', password: 'lrj2013', account_id: Account.second.id)

#Rooms
blue = Room.create!(name: 'Blue Room', number: 201, description: "A small conference room for up to 8 people.", amenities: "Adjustable Highback Chairs, A/V Equipment, Shared Catering Kitchen", image_url: 'https://media.istockphoto.com/photos/meeting-room-picture-id182160138?b=1&k=20&m=182160138&s=170667a&w=0&h=rH1LiL5l00z1QyQZG84loL3Mge7SQf5bJtGnieXAHqg=')
green = Room.create!(name: 'Green Room', number: 202, description: "A large space with built in bench seating that can accomodate 16 - 44 people depending on layout.", amenities: "Adjustable Highback Chairs, A/V Equipment, Private Catering Kitchen, Large Windows with Mountain Views", image_url: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')
pink = Room.create!(name: 'Pink Room', number: 203, description: "A calm workspace for small groups or breakout sessions.", amenities: "Two Reclining Arm Chairs, Dimmable Lights, Built-in Noise Machine, Shared Catering Kitchen", image_url: 'https://media.istockphoto.com/photos/meeting-room-in-the-office-with-pink-armchairs-yellow-chairs-a-black-picture-id1168167200?b=1&k=20&m=1168167200&s=170667a&w=0&h=IxRSogetD1Re-BPNEsQwpanDl-Jy7tU7X4sij4xptEQ=')
orange = Room.create!(name: 'Orange Room', number: 205, description: "A large conference room for up to 16 people.", amenities: "Adjustable Chairs, A/V Equipment, Large Windows with City Views, Private Catering Kitchen", image_url: 'https://media.istockphoto.com/photos/empty-board-room-picture-id1066317888?b=1&k=20&m=1066317888&s=170667a&w=0&h=u8c4MXUb3XBwTaZOdgTUr4DdSobkBILAXWiFP3Wpkks=')

puts 'Done seeding.'