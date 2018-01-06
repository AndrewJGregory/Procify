# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all

user_one = User.create(username: 'andrew', password: 'password')
user_two = User.create(username: 'cheryl', password: 'password')

song_one = Song.create(title: 'Pest Control', artist_id: 5, album_id: 21, url: 'https://s3.amazonaws.com/procify-dev/The+Game+-+Pest+Control.mp3')

song_two = Song.create(title: 'The Come Up', artist_id: 6, album_id: 42, url: 'https://s3.amazonaws.com/procify-dev/Logic+-+The+Come+Up.mp3')

song_three = Song.create(title: 'Black Out Days', artist_id: 100, album_id: 55, url: 'https://s3.amazonaws.com/procify-dev/Phantogram+-+Black+Out+Days.mp3')
