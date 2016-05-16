class ChangeCoordinatesFromStringToFloat < ActiveRecord::Migration
  def change
    change_column :events, :longitude, :float
    change_column :events, :latitude, :float
  end
end
