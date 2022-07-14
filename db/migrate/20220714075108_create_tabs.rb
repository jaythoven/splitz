class CreateTabs < ActiveRecord::Migration[6.1]
  def change
    create_table :tabs do |t|
      t.string :name
      t.boolean :completed

      t.timestamps
    end
  end
end
