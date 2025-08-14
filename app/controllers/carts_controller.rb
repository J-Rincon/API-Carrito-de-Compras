class CartsController < ApplicationController
  before_action :ensure_product_exists!, only: :create

  def show
    render json: cart_payload, status: :ok
  end

  def create
    CartStore.instance.add(params.require(:product_id))
    render json: cart_payload, status: :created
  end

  private

  def ensure_product_exists!
    pid = params.require(:product_id).to_i
    found = PRODUCTS.any? { |p| p[:id] == pid }
    return if found

    render json: { error: { code: "not_found", message: "Product #{pid} does not exist" } }, status: :not_found
  end

  def cart_payload
    items = CartStore.instance.items
    { cart: { items:, total: CartStore.instance.total } }
  end
end
