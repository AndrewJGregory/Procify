json.playlist do
  json.set! @playlist.id do
    json.extract! @playlist, :id, :title, :user_id
  end
end

json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :album_id, :artist_id, :url
      json.playlist_ids do
        json.array! song.playlists.map { |playlist| playlist.id }
      end
    end
  end
end
