@playlists.each do |playlist|
  json.partial! 'api/playlists/show', playlist: playlist
end
