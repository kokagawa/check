class CreateChecktimes < ActiveRecord::Migration[5.2]
  def change
    create_table :checktimes do |t|
      t.text :plan, null: false
      t.integer :month, null: false
      t.integer :day, null: false
      t.integer :hour, null: false
      t.integer :minute, null: false
      t.integer :total_sec
      t.text :memo
      t.timestamps
    end
  end
end
