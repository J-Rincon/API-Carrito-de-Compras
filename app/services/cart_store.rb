class CartStore
  def self.instance # Singleton pattern
    @instance ||= new
  end

  def initialize
    @mutex = Mutex.new # prevent two threads from accessing/modifying the same resource at the same time.
    @product_ids = [] # stores IDs to reconstitute from PRODUCTS
  end

  def add(product_id)
    @mutex.synchronize do # ensures that only one thread executes this block
      @product_ids << Integer(product_id)
    end
  rescue ArgumentError
    raise ActionController::ParameterMissing, "product_id must be an integer"
  end

  def items
    ids = nil
    @mutex.synchronize { ids = @product_ids.dup }
    ids.map { |pid| PRODUCTS.find { |p| p[:id] == pid } }.compact
  end

  def clear
    @mutex.synchronize { @product_ids.clear }
  end

  def total
    items.sum { |p| p[:price].to_i }
  end
end
