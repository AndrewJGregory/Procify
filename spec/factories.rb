FactoryBot.define do
  factory :user do
    username 'andrew'
    email 'andrew@email.com'
    password_digest "$2a$10$P91dz5B6P3ZSeXXrqsg0I.QwKdxKxyD2nTRLTO8QErWjvZFJHniCu"
    # this is the hash of 'password'
    birthday '11061993'
  end
end

FactoryBot.define do
  factory :artist do
    name 'artist_one'
    img_url 'www.imgurl.com'
  end
end

FactoryBot.define do
  factory :album_song do
    album_id 1
    song_id 1
  end
end

FactoryBot.define do
  factory :album do
    title 'best album ever'
    img_url 'www.imgurl.com'
  end
end

FactoryBot.define do
  factory :playlist_song do
    playlist_id 1
    song_id 1
  end
end

FactoryBot.define do
  factory :playlist do
    title 'my cool playlist'
    user_id 1
    song_id 1
  end
end
