module ErrorHandling
  extend ActiveSupport::Concern

  included do
    rescue_from StandardError, with: :handle_internal_error
    rescue_from ActionController::ParameterMissing, with: :handle_unprocessable
  end

  private

  def json_error(status, code, message)
    render json: { error: { code:, message: } }, status:
  end

  def handle_internal_error(error)
    # Only in development do we expose the original message
    message = Rails.env.development? ? error.message : "An error occurred"
    json_error(:internal_server_error, "internal_error", message)
  end

  def handle_unprocessable(error)
    json_error(:unprocessable_entity, "invalid_params", error.message)
  end
end
