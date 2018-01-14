@albums.each do |album|
  json.albums do
    json.partial! 'api/albums/show', album: album
  end

  json.artists do
    json.partial! 'api/artists/show', artist: album.artist
  end
end
