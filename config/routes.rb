Rails.application.routes.draw do

  resources :jobs do
    collection do
      get 'search'
    end
  end
  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "jobs#home"
end
