class RemoveEventFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :event, :string
  end
end
