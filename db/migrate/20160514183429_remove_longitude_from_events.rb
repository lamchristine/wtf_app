class RemoveLongitudeFromEvents < ActiveRecord::Migration
  def change
    remove_column :events, :longitude, :decimal
  end
end
