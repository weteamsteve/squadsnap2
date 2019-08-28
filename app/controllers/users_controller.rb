class UsersController < ActionController::Base
  def check_for_user
    if user_signed_in?
      render :json => current_user.to_json
    else
      render :json => User.new.to_json
    end
  end
end
