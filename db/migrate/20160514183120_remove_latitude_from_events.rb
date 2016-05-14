class RemoveLatitudeFromEvents < ActiveRecord::Migration
  def change
    remove_column :events, :latitude, :decimal
  end
end
