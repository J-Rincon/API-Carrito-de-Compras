require "rails_helper"

RSpec.describe "Products", type: :request do
  describe "GET /products" do
    it "returns the static product list" do
      get "/products"
      expect(response).to have_http_status(:ok)
      body = JSON.parse(response.body)
      expect(body["products"]).to be_an(Array)
      expect(body["products"].size).to eq(PRODUCTS.size)
    end
  end
end
