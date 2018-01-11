json.album do
  json.set! @album.id do
    json.extract! @album, :title, :img_url, :id
    json.song_ids do
      json.array! @album.songs.map { |song| song.id }

    end
    json.artist_id @album.artist.id
  end
end

json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :artist_id, :url
    end
  end
end

json.artist do
  json.set! @album.artist.id do
    json.extract! @album.artist, :id, :name
  end
end
