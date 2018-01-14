json.playlist do
  json.partial! 'api/playlists/show', playlist: @playlist
end

json.songs do
  @songs.each do |song|
    json.partial! 'api/songs/show', song: song
  end
end

json.artists do
  @songs.each do |song|
    json.partial! 'api/artists/show', artist: song.artist
  end
end
