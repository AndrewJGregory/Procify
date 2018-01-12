@albums.each do |album|
  json.albums do
    json.set! album.id do
      json.extract! album, :title, :img_url, :id
      json.artist_id album.artist.id
      json.song_ids do
        json.array! album.songs.map(&:id)
      end
    end
  end

  json.artists do
    json.set! album.artist_id do
      json.extract! album.artist, :id, :name
    end
  end
end
