json.set! album.id do
  json.extract! album, :title, :img_url, :id
  json.song_ids do
    json.array! album.songs.map(&:id)
  end
  json.artist_id album.artist.id
end
