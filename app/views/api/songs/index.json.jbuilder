@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :playlist_id, :album_id, :artist_id, :url
  end
end
