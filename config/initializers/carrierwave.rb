require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.cache_dir = "#{Rails.root}/tmp/uploads"

  if Rails.env.production?
    config.storage :fog
    config.fog_directory = aws_bucket_name
    config.fog_credentials = {
      :provider              => 'AWS',
      :aws_access_key_id     => aws_access_key_id,
      :aws_secret_access_key => aws_secret_access_key,
      :region                => aws_region
    }
  else
    config.storage :file
  end
end
