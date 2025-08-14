require "rails_helper"

RSpec.describe "Cart", type: :request do
  before { CartStore.instance.clear }

  describe "GET /cart" do
    it "returns an empty cart initially" do
      get "/cart"
      expect(response).to have_http_status(:ok)
      body = JSON.parse(response.body)
      expect(body.dig("cart", "items")).to eq([])
      expect(body.dig("cart", "total")).to eq(0)
    end
  end

  describe "POST /cart" do
    it "adds a valid product and returns cart" do
      post "/cart", params: { product_id: 1 }
      expect(response).to have_http_status(:created)
      body = JSON.parse(response.body)
      expect(body.dig("cart", "items").first["id"]).to eq(1)
      expect(body.dig("cart", "total")).to be > 0
    end

    it "returns 404 for invalid product" do
      post "/cart", params: { product_id: 999 }
      expect(response).to have_http_status(:not_found)
    end

    it "returns 422 without product_id" do
      post "/cart", params: {}
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
