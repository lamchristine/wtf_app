class Event < ActiveRecord::Base
  belongs_to :user

  validates :title, :content, :category,
    presence: true

  validates :title,
    length: {maximum: 15}

  validates :content,
      length: {maximum: 140}
end
