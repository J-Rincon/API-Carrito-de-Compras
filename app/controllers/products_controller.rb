class ProductsController < ApplicationController
  def index
    render json: { products: PRODUCTS }
  end
end
