class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :business_name
      t.string :address

      t.timestamps
    end
  end
end
