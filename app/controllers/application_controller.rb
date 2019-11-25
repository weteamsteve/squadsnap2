class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  private

  def after_sign_in_path_for(resource)
    resource.authentication_token = resource.generate_authentication_token
    resource.save

    stored_location_for(resource) || homepage_path
  end
end
