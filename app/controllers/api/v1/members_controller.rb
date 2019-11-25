class Api::V1::MembersController < ::ApiController
  def index
    member = Member.all.order(created_at: :desc)
    render json: member
  end

  def showForSquad
    if membersForSquad
      render json: membersForSquad
    else
      render json: membersForSquad.errors
    end
  end

  def showForUser
    if membersForUser
      render json: membersForUser
    else
      render json membersForUser.errors
    end
  end

  private

  def member_params
    params.permit(:squad, :user, :membership)
  end

  def membersForSquad
    @members = Member.where(squad: squad)
  end

  def membersForUser
    @members = Member.where(user: user)
  end
end
