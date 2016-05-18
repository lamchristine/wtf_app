Rails.application.routes.draw do
  devise_for :users
  root    "events#index"

  # get     "/events", to: "events#index", as: "events"
  get       "/about", to: "about#index"

  resources :users do
    resources :events do
      put "like", to: "events#upvote"
      put "dislike", to: "events#downvote"
    end
  end

end

#
# Prefix Verb               URI Pattern                                               Controller#Action
# new_user_session          GET    /users/sign_in(.:format)                           devise/sessions#new
# user_session              POST   /users/sign_in(.:format)                           devise/sessions#create
# destroy_user_session      DELETE /users/sign_out(.:format)                          devise/sessions#destroy
# user_password             POST   /users/password(.:format)                          devise/passwords#create
# new_user_password         GET    /users/password/new(.:format)                      devise/passwords#new
# edit_user_password        GET    /users/password/edit(.:format)                     devise/passwords#edit
#                           PATCH  /users/password(.:format)                          devise/passwords#update
#                           PUT    /users/password(.:format)                          devise/passwords#update
# cancel_user_registration  GET    /users/cancel(.:format)                            devise/registrations#cancel
# user_registration         POST   /users(.:format)                                   devise/registrations#create
# new_user_registration     GET    /users/sign_up(.:format)                           devise/registrations#new
# edit_user_registration    GET    /users/edit(.:format)                              devise/registrations#edit
#                           PATCH  /users(.:format)                                   devise/registrations#update
#                           PUT    /users(.:format)                                   devise/registrations#update
#                           DELETE /users(.:format)                                   devise/registrations#destroy
#   root                    GET    /                                                  events#index
#  about                    GET    /about(.:format)                                   about#index
# user_event_like           PUT    /users/:user_id/events/:event_id/like(.:format)    events#upvote
# user_event_dislike        PUT    /users/:user_id/events/:event_id/dislike(.:format) events#downvote
# user_events               GET    /users/:user_id/events(.:format)                   events#index
#                           POST   /users/:user_id/events(.:format)                   events#create
# new_user_event            GET    /users/:user_id/events/new(.:format)               events#new
# edit_user_event           GET    /users/:user_id/events/:id/edit(.:format)          events#edit
# user_event                GET    /users/:user_id/events/:id(.:format)               events#show
#                           PATCH  /users/:user_id/events/:id(.:format)               events#update
#                           PUT    /users/:user_id/events/:id(.:format)               events#update
#                           DELETE /users/:user_id/events/:id(.:format)               events#destroy
#  users                    GET    /users(.:format)                                   users#index
#                           POST   /users(.:format)                                   users#create
# new_user                  GET    /users/new(.:format)                               users#new
# edit_user                 GET    /users/:id/edit(.:format)                          users#edit
#   user                    GET    /users/:id(.:format)                               users#show
#                           PATCH  /users/:id(.:format)                               users#update
#                           PUT    /users/:id(.:format)                               users#update
#                           DELETE /users/:id(.:format)                               users#destroy
