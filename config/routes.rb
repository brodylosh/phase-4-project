Rails.application.routes.draw do
  resources :listings
  resources :agents, only: [:index, :show, :create]
  resources :houses
  resources :buyers, only: [:index, :show, :create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "buyers#create"
  get "/me", to: "buyers#show"
end
