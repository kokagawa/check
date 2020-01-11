class Jjj < ActiveRecord::Migration[5.2]
  def change
    remove_column :checktimes, :time, :integer
    remove_column :checktimes, :second, :integer

  end
end
