json.extract! @song, :id, :title, :artist_id, :url
json.playlist_ids do
  json.array! @playlists.map(&:id)
end
