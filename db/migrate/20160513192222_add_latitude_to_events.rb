class AddLatitudeToEvents < ActiveRecord::Migration
  def change
    add_column :events, :latitude, :decimal
  end
end
