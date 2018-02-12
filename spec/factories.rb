FactoryBot.define do
  factory :user do
    username "John"
    password_digest "test_hashed_password_digest"
    email "testemail@gmail.com"
    birthday '11061993'
  end
end
