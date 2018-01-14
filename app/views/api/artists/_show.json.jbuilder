json.set! artist.id do
  json.extract! artist, :name, :img_url, :id
end
