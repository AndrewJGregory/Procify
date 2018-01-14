json.artist do
  json.partial! 'api/artists/show', artist: @artist
end

json.songs do
  @artist.songs.each do |song|
    json.partial! 'api/songs/show', song: song
  end
end

json.albums do
  @artist.albums.each do |album|
    json.partial! 'api/albums/show', album: album
  end
end
