class Fff < ActiveRecord::Migration[5.2]
  def change
    add_column :checktimes, :second, :integer, null: false
  end
end
