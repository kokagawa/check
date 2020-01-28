class Yyy < ActiveRecord::Migration[5.2]
  def change
    add_column :checktimes, :total_sec, :integer
  end
end
