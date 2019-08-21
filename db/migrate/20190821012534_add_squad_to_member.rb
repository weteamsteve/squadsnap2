class AddSquadToMember < ActiveRecord::Migration[6.0]
  def change
    add_reference :members, :squad, null: false, index: true, foreign_key: true
  end
end
