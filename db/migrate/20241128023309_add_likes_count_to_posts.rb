class AddLikesCountToPosts < ActiveRecord::Migration[7.2]
  def change
    add_column :posts, :likes, :integer, default: 0, null: false
  end
end
