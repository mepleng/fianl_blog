class Post < ApplicationRecord
    has_many :comments, dependent: :destroy

    def increment_likes!
      update!(likes: likes + 1)
    end
  end
  