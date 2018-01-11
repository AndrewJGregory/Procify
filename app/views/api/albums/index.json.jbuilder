@albums.each do |album|
  json.set! album.id do
    json.extract! album, :title, :img_url, :id
  end
end
