class ChangeBirthdayColTypeUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :birthday, :string
  end
end
