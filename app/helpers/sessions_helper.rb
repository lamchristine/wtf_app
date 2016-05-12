module SessionsHelper

  def login(user)
    session[:user_id] = user.id
    @current_user = user
  end

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def logged_in?
    if current_user == nil
      flash[:error] = "You must be logged in to perform this action"
      redirect_to new_user_session_path
    end
  end

  def logout
    @current_user = session[:user_id] = nil
  end


end
