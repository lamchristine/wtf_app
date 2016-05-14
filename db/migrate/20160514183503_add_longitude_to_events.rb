class AddLongitudeToEvents < ActiveRecord::Migration
  def change
    add_column :events, :longitude, :string
  end
end
