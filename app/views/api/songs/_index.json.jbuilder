songs.each do |song|
  json.songs do
    json.partial! 'api/songs/show', song: song
  end

  json.artists do
    json.partial! 'api/artists/show', artist: song.artist
  end

  json.albums do
    song.albums.each do |album|
      json.partial! 'api/albums/show', album: album
    end
  end
end
