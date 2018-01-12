json.playlist do
  json.set! @playlist.id do
    json.extract! @playlist, :id, :title, :user_id
  end
end

json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :artist_id, :url
      json.playlist_ids do
        json.array! song.playlists.map { |playlist| playlist.id }
      end
    end
  end
end

json.artists do
  @songs.each do |song|
    json.set! song.artist.id do
      json.extract! song.artist, :name, :id
    end
  end
end
