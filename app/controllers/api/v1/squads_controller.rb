class Api::V1::SquadsController < ::ApiController
  def index
    @squad = Squad.all.order(created_at: :desc)
    render json: @squad
  end

  def create
    @squad = Squad.create!(squad_params)
    if @squad
      create_membership
      render json: @squad
    else
      render json: @squad.errors
    end
  end

  def show
    #@members = Member.where(squad: squad)

    if squad
      #render json: squad
      # Commenting this out allows us to use the jbuilder files
    else
      render json: squad.errors
    end
  end

  def destroy
    # Ruby's safe navigation operator &., which avoids nil errors wwhen calling a method.
    # This lets you delete a squad only if it exists, then send a message as a response.
    # TODO: test to make sure destroying a squad deletes all pre-existing member's
    squad&.destroy
    render json: { message: 'Squad deleted!' }
  end

  private

  def squad_params
    params.permit(:name, :sport, :owner_id)
  end

  def squad
    @squad ||= Squad.find(params[:id])
  end

  def create_membership
    member = Member.new(squad: @squad, user: current_user, membership: 'owner')
    member.save(validate: true)
  end
end
