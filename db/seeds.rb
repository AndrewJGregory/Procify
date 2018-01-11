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
Album.destroy_all
AlbumSong.destroy_all
Artist.destroy_all

### USERS ###
user_one = User.create!(username: 'andrew', password: 'password', email: 'andrew@email.com', birthday: '11061993')
user_two = User.create!(username: 'cheryl', password: 'password', email: 'cookies@gmail.com', birthday: '11221961')
### END USERS ###


### ARTISTS ###
artist_logic = Artist.create!(name: 'Logic', img_url: 'https://s3.amazonaws.com/procify-dev/logicArtistCover.jpeg')
artist_meg_myers = Artist.create!(name: 'Meg Myers', img_url: 'https://s3.amazonaws.com/procify-dev/megMyersArtistCover.jpg')

### END ARTISTS ###

### PLAYLISTS ###
playlist_one = Playlist.create!(title: 'gym', user_id: user_one.id)
playlist_two = Playlist.create!(title: 'hangout', user_id: user_two.id)
### END PLAYLISTS ###

### SONGS ###
song_one = Song.create!(title: 'Pest Control', artist_id: 5, url: 'https://s3.amazonaws.com/procify-dev/The+Game+-+Pest+Control.mp3', playlist_id: playlist_one.id)

song_two = Song.create!(title: 'The Come Up', artist_id: artist_logic.id, url: 'https://s3.amazonaws.com/procify-dev/Young+Sinatra/Logic+-+The+Come+Up.mp3', playlist_id: playlist_one.id)

song_three = Song.create!(title: 'Black Out Days', artist_id: 100, url: 'https://s3.amazonaws.com/procify-dev/Phantogram+-+Black+Out+Days.mp3', playlist_id: playlist_two.id)

song_four = Song.create!(
  title: '30,000',
  artist_id: artist_logic.id,
  url: 'https://s3.amazonaws.com/procify-dev/Young+Sinatra/Logic+-+30%2C000.mp3',
  playlist_id: playlist_two.id)

song_five = Song.create!(
  title: 'Man of the Year',
  artist_id: artist_logic.id,
  url: 'https://s3.amazonaws.com/procify-dev/Young+Sinatra/Logic+-+Man+of+the+Year.mp3',
  playlist_id: playlist_two.id)

song_six = Song.create!(
  title: 'Roll Call',
  artist_id: artist_logic.id,
  url: 'https://s3.amazonaws.com/procify-dev/Young+Sinatra/Logic+-+Roll+Call.mp3',
  playlist_id: playlist_two.id)

song_seven = Song.create!(
  title: 'Welcome to Forever',
  artist_id: artist_logic.id,
  url: 'https://s3.amazonaws.com/procify-dev/Young+Sinatra/Logic+-+Welcome+to+Forever+ft.+Jon+Bellion.mp3',
  playlist_id: playlist_one.id
)

song_eight = Song.create!(
  title: 'Coffins',
  artist_id: artist_meg_myers.id,
  url: 'https://s3.amazonaws.com/procify-dev/Reflections/MisterWives+-+Coffins.mp3',
  playlist_id: playlist_one.id
)

song_nine = Song.create!(
  title: 'Vagabond',
  artist_id: artist_meg_myers.id,
  url: 'https://s3.amazonaws.com/procify-dev/Reflections/MisterWives+-+Vagabond.mp3',
  playlist_id: playlist_two.id
)

song_ten = Song.create!(
  title: 'Riptide',
  artist_id: artist_meg_myers.id,
  url: 'https://s3.amazonaws.com/procify-dev/Reflections/Misterwives+-+Riptide.mp3',
  playlist_id: playlist_two.id
)

### END SONGS ###

### PLAYLIST SONGS ###
playlist_one_song_one = PlaylistSong.create!(song_id: song_one.id, playlist_id: playlist_one.id)
playlist_one_song_two = PlaylistSong.create!(song_id: song_two.id, playlist_id: playlist_one.id)

playlist_two_song_one = PlaylistSong.create!(song_id: song_three.id, playlist_id: playlist_two.id)
### END PLAYLIST SONGS ###

### ALBUMS ###
album_one = Album.create!(title: 'Young Sinatra', img_url: 'https://s3.amazonaws.com/procify-dev/Young+Sinatra/YoungSinatraAlbumCover.jpg', artist_id: artist_logic.id)

album_two = Album.create(title: 'Reflections', img_url: 'https://s3.amazonaws.com/procify-dev/Reflections/ReflectionsAlbumCover.jpg', artist_id: artist_meg_myers.id)
### END ALBUMS ###


### ALBUM SONGS ###
AlbumSong.create!(album_id: album_one.id, song_id: song_four.id)
AlbumSong.create!(album_id: album_one.id, song_id: song_five.id)
AlbumSong.create!(album_id: album_one.id, song_id: song_six.id)
AlbumSong.create!(album_id: album_one.id, song_id: song_seven.id)
AlbumSong.create!(album_id: album_two.id, song_id: song_eight.id)
AlbumSong.create!(album_id: album_two.id, song_id: song_nine.id)
AlbumSong.create!(album_id: album_two.id, song_id: song_ten.id)
### END ALBUM SONGS ###
