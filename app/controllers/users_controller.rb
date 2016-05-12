class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.create(user_params)
    if @user.avatar == ""
      #Adds default avatar image if no image is uploaded
      @user.avatar = "default_avatar.jpeg"
    end
    if @user.save
      login(@user)
      redirect_to root_path
    else
      flash[:error] = @user.errors.full_messages.to_sentenaces
      redirect_to new_user_path
    end
  end

  private
  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :avatar)
  end

end
