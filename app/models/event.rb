class Event < ActiveRecord::Base
  belongs_to :user
  has_one :longitude
  has_one :latitude

  validates :title, :content, :category,
    presence: true

  validates :title,
    length: {maximum: 15}

  validates :content,
      length: {maximum: 140}
end
