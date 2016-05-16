class Event < ActiveRecord::Base
  belongs_to :user

  attr_accessor :address


  validates :title, :content, :category,
    presence: true

  validates :title,
    length: {maximum: 50}

  validates :content,
      length: {maximum: 140}

#grab longitude and latitude of address/ip address 
    geocoded_by :address,
      :latitude => :latitude,
      :longitude => :longitude



  #avoid unnecessary API requests: only want to geocode an object only when
  #an address is present, or the address has been changed since last save(or it has
  #never been saved)
  # after_validation :geocode, if: ->(event){ event.address.present? and event.address_changed? }

  after_validation :geocode
end
