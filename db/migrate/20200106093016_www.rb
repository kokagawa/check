class Www < ActiveRecord::Migration[5.2]
  def change
    add_column :checktime, :time, :integer, null: false
    add_column :checktime, :text, :text, null: false
  end
end
