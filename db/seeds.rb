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
# 
# song_one = Song.new(title: 'The Days', playlist_id: 1, artist_id: 5, album_id: 21)
# file = File.open('app/assets/songs/The Days.mp3')
# song_one.musicfile = file
# song_one.save!
