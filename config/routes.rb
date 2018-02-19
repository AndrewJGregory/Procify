Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: %i[create destroy]
    resources :searches, only: [:create]
    resources :songs, only: %i[index destroy]
    resources :users, only: [:create] do
      resources :playlists, except: %i[destroy show]
    end
    resources :artists, only: %i[index show]
    resources :albums, only: %i[index show]
    resources :playlists, only: %i[destroy show]
  end

  root to: 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
