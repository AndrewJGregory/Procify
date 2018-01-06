# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

user_one = User.create!(username: 'andrew', password: 'password', email: 'andrew@email.com', birthday: '11061993')
user_two = User.create!(username: 'cheryl', password: 'password', email: 'cookies@gmail.com', birthday: '11221961')

song_one = Song.create!(title: 'Pest Control', artist_id: 5, album_id: 21, url: 'https://s3.amazonaws.com/procify-dev/The+Game+-+Pest+Control.mp3')

song_two = Song.create!(title: 'The Come Up', artist_id: 6, album_id: 42, url: 'https://s3.amazonaws.com/procify-dev/Logic+-+The+Come+Up.mp3')

song_three = Song.create!(title: 'Black Out Days', artist_id: 100, album_id: 55, url: 'https://s3.amazonaws.com/procify-dev/Phantogram+-+Black+Out+Days.mp3')

playlist_one = Playlist.create!(title: 'gym', user_id: user_one.id)
playlist_two = Playlist.create!(title: 'hangout', user_id: user_two.id)

playlist_one_song_one = PlaylistSong.create!(song_id: song_one.id, playlist_id: playlist_one.id)
playlist_one_song_two = PlaylistSong.create!(song_id: song_two.id, playlist_id: playlist_one.id)

playlist_two_song_one = PlaylistSong.create!(song_id: song_three.id, playlist_id: playlist_two.id)
