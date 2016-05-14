Rails.application.routes.draw do
  devise_for :users
  root    "events#index"

  # get     "/events", to: "events#index", as: "events"
  get       "/about", to: "about#index"

  resources :users do
    resources :events do
    end
  end

end


# root GET    /                                         events#index
#                  events GET    /events(.:format)                         events#index
#             user_events GET    /users/:user_id/events(.:format)          events#index
#                         POST   /users/:user_id/events(.:format)          events#create
#          new_user_event GET    /users/:user_id/events/new(.:format)      events#new
#         edit_user_event GET    /users/:user_id/events/:id/edit(.:format) events#edit
#              user_event GET    /users/:user_id/events/:id(.:format)      events#show
#                         PATCH  /users/:user_id/events/:id(.:format)      events#update
#                         PUT    /users/:user_id/events/:id(.:format)      events#update
#                         DELETE /users/:user_id/events/:id(.:format)      events#destroy

# root GET    /                         events#index
# events GET    /events(.:format)         events#index
# users GET    /users(.:format)          users#index
#       POST   /users(.:format)          users#create
# new_user GET    /users/new(.:format)      users#new
# edit_user GET    /users/:id/edit(.:format) users#edit
#  user GET    /users/:id(.:format)      users#show
#       PATCH  /users/:id(.:format)      users#update
#       PUT    /users/:id(.:format)      users#update
#       DELETE /users/:id(.:format)      users#destroy
