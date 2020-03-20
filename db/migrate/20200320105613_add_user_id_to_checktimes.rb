class AddUserIdToChecktimes < ActiveRecord::Migration[5.2]
  def change
    add_column :checktimes, :user_id, :integer
  end
end
