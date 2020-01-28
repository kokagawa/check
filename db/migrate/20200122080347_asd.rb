class Asd < ActiveRecord::Migration[5.2]
  def change
    add_column :checktimes, :memo, :text
  end
end
