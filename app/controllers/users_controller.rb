class UsersController < ActionController::Base
  skip_before_action :verify_authenticity_token

  #respond_to :json

  def check_for_user
    if user_signed_in?
      render :json => current_user.to_json
    else
      render :json => User.new.to_json
    end
  end

  #def sign_out
  #  if user_signed_in?
  #    redirect_to destroy_user_session_path
  #  end
  #end
end
