require 'rails_helper'

RSpec.describe Event, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"


  # describe Event do
  #   it "has a valid factory" do
  #     expect(build(:event)).to be_valid
  #   end
  #   it "is invalid without a title" do
  #     expect(build(:event, title: nil)).to_not be_valid
  #   end
  #   it "is invalid without a content" do
  #     expect(build(:event, content: nil)).to_not be_valid
  #   end
  #   it "is invalid without a category" do
  #     expect(build(:event, category: nil)).to_not be_valid
  #   end
  #
  # end

  #using the shoulda-matchers gem
  # describe Event, 'validation' do
  #   it { should validate_length_of(:title).is_at_most(50) }
  #   it { should validate_presence_of(:title) }
  #
  #   it { should validate_length_of(:content).is_at_most(140) }
  #   it { should validate_presence_of(:content) }
  #
  #   it { should validate_presence_of(:category) }
  #
  #   it { should belong_to(:user) }
  # end
  #
  # describe Event, 'column_specification' do
  #   it { should have_db_column(:title).of_type(:string) }
  #   it { should have_db_column(:content).of_type(:string) }
  #   it { should have_db_column(:category).of_type(:string) }
  # end




end #closes RSpec
