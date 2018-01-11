json.album do
  json.set! @album.id do
    json.extract! @album, :title, :img_url
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
