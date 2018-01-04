Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create] do
      resources :playlists
    end
  end

  root to: 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
