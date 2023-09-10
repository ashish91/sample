Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users
  root "jobs#home"

  resources :jobs do
    collection do
      get 'search'
    end
  end
  resources :categories

  # api
  namespace :api do
    resources :jobs, only: [:index, :create]
    resources :companies, only: [:index]
  end
end
