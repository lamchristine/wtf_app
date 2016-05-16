class Event < ActiveRecord::Base
  belongs_to :user
  # has_one :longitude
  # has_one :latitude

  attr_accessor :address


  validates :title, :content, :category,
    presence: true

  validates :title,
    length: {maximum: 15}

  validates :content,
      length: {maximum: 140}

  if :address.present?
    geocoded_by :address
  else
    geocoded_by :ip_address,
    :latitude => :latitude,
    :longitude => :longitude
  end


  #avoid unnecessary API requests: only want to geocode an object only when
  #an address is present, or the address has been changed since last save(or it has
  #never been saved)
  # after_validation :geocode, if: ->(event){ event.address.present? and event.address_changed? }

  after_validation :geocode
end
