class CreateChecktimes < ActiveRecord::Migration[5.2]
  def change
    create_table :checktimes do |t|
      t.integer :time, null: false
      t.text :text, null: false
      t.timestamps
    end
  end
end
