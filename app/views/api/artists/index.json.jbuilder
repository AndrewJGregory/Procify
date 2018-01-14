@artists.each do |artist|
  json.partial! 'api/artists/show', artist: artist
end
