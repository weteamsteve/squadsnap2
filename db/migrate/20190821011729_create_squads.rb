class CreateSquads < ActiveRecord::Migration[6.0]
  def change
    create_table :squads do |t|
      t.string :name, null: false
      t.string :sport, null: false
      t.references :owner, null: false, index: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
