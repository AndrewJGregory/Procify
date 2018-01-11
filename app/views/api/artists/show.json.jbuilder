json.artist do
  json.set! @artist.id do
    json.extract! @artist, :name, :img_url, :id
  end
end

json.songs do
  @artist.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :artist_id, :url
    end
  end
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.extract! album, :title, :img_url, :id
      json.artist_id album.artist.id
    end
  end
end
