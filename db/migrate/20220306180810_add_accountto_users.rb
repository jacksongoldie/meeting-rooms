class AddAccounttoUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :account, foreign_key: true
  end
end
