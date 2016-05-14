class ChangeLongitudeToString < ActiveRecord::Migration
  def change
    remove_column :users, :latitude
  end
end
