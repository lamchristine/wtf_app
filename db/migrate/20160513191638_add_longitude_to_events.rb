class AddLongitudeToEvents < ActiveRecord::Migration
  def change
    add_column :events, :longitude, :decimal
  end
end
