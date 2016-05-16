class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :firstname, :lastname, :avatar, :password])
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:firstname, :lastname, :email, :password, :current_password) }
  end

################### development ONLY ################
#lookup method which calls the Geocoder IP lookup directly passing in the results of request.remote_ip.

# def location
#   if Rails.env.development?
#     Geocoder.search(request.remote_ip).first
#   else
#     request.location
#   end
# end

end
