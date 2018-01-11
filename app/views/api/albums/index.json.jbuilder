@albums.each do |album|
  json.set! album.id do
    json.extract! album, :title, :img_url
    json.song_ids do
      json.array! album.songs.map { |song| song.id }
    end
  end
end
