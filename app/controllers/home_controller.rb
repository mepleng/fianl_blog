class HomeController < ApplicationController
  def index
    @posts = Post.all
  end

  def authen
    @posts = Post.all
  end 
end
