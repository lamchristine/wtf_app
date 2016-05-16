class RemoveIpFromEvents < ActiveRecord::Migration
  def change
    remove_column :events, :ip_address, :string
  end
end
