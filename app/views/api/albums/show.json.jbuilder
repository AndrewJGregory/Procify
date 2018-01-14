json.album do
  json.partial! 'api/albums/show', album: @album
end

json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :artist_id, :url
    end
  end
end

json.artist do
  json.partial! 'api/artists/show', artist: @album.artist
end
