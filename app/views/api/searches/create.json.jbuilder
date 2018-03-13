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

json.partial! 'api/songs/index', songs: @songs

@playlists.each do |playlist|
  json.playlists do
    json.partial! 'api/playlists/show', playlist: playlist
  end
end
