class CreateChecktimes < ActiveRecord::Migration[5.2]
  def change
    create_table :checktime do |t|

      t.timestamps
    end
  end
end
