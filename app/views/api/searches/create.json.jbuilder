@albums.each do |album|
  json.albums do
    json.partial! 'api/albums/show', album: album
  end
end

@artists.each do |artist|
  json.artists do
    json.partial! 'api/artists/show', artist: artist
  end
end

@songs.each do |song|
  json.songs do
    json.partial! 'api/songs/show', song: song
  end
end

@playlists.each do |playlist|
  json.playlists do
    json.partial! 'api/playlists/show', playlist: playlist
  end
end
