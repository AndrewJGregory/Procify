Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :searches, only: [:create]
    resources :songs, only: [:index, :destroy]
    resources :users, only: [:create] do
      resources :playlists, except: [:destroy, :show]
    end
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :playlists, only: [:destroy, :show]
  end

  root to: 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
