class CreateUsertabs < ActiveRecord::Migration[6.1]
  def change
    create_table :usertabs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :tab, null: false, foreign_key: true

      t.timestamps
    end
  end
end
