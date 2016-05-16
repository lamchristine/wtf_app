class UsersController < ApplicationController

  def show
      @user = User.find_by(id: params[:id])
      @events = @user.events.paginate(:page => params[:page], :per_page=>3)

      if current_user == @user
        render :show
      else
        flash[:error] = "This profile is private."
        redirect_to root_path
      end

  end

  private
  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :avatar)
  end

end
