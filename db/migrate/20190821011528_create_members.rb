class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.references :user, null: false, foreign_key: true
      t.string :position
      t.string :number
      t.string :membership, null: false # ie owner, manager, member, request, ghost

      t.timestamps
    end
  end
end
