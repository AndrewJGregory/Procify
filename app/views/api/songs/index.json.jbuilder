@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :artist_id, :url
    json.playlist_ids do
      json.array! song.playlists.map { |playlist| playlist.id }
    end
  end
end
