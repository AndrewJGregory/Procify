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
