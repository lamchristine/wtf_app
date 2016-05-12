class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def show
      @user = User.find_by(id: params[:id])
      if current_user == @user
        render :show
      else
        flash[:error] = "This profile is private."
        redirect_to root_path
      end
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
      flash[:error] = @user.errors.full_messages.to_sentences
      redirect_to new_user_path
    end
  end

  def edit
    @user = User.find_by(id: params[:id])
    if current_user == @user
      render :edit
    else
      flash[:error] = "You cannot edit another users profile"
      redirect_to user_path
    end
  end

  def update
    user = User.find_by(id: params[:id])
      if user == current_user
        user.update(user_params)
        if user.avatar == ""
          #Adds default avatar image if no image is uploaded
          user.avatar = "default_avatar.jpeg"
          user.save
        end
        redirect_to user_path
      else
        flash[:error] = "You cannot edit another users profile"
        redirect_to user_path
      end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    # if allowed?(user.id) && user.destroy
    #   flash[:notice] = "Sorry to see you go. Account successfully deleted"
    #   redirect_to index_path
    # else
    #   redirect_to user_path
    # end
  end

  private
  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :avatar)
  end

end
