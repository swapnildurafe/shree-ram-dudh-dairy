import { useState } from 'react';

const products = [
  {
    name: 'Cow Milk',
    price: 50,
    unit: 'Litre',
    image: '/products/milk.jpg',
  },
  {
    name: 'Paneer',
    price: 90,
    unit: 'Gram',
    image: '/products/paneer.jpg',
  },
  {
    name: 'Ghee',
    price: 400,
    unit: 'Gram',
    image: '/products/ghee.jpg',
  },
];

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '',
    address: '',
  });
  const [success, setSuccess] = useState(false);

  const openOrderForm = (product) => {
    setSelectedProduct(product);
    setFormData({ name: '', phone: '', quantity: '', address: '' });
    setShowForm(true);
    setSuccess(false);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      product: selectedProduct.name,
    };

    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSuccess(true);
      setShowForm(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#fffef5', minHeight: '100vh' }}>
      
      {/* Header */}
      <nav className="navbar navbar-light bg-light px-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.png" height="50" alt="logo" className="me-2" />
          <strong>SHREE RAM DUDH DAIRY</strong>
        </a>
        <div>
          <a href="/farm" className="btn btn-outline-secondary me-2">Our Farm</a>
          <a href="/branches" className="btn btn-outline-secondary me-2">Our Branches</a>
          <a href="/contact" className="btn btn-outline-primary">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center p-5">
        <h1 className="display-5 fw-bold text-secondary">Pure. Fresh. Delivered.</h1>
        <p className="lead text-muted">Straight from our farm to your home</p>
      </div>

      {/* Product Section */}
      <div className="container pb-5">
        <div className="row justify-content-center">
          {products.map((prod, idx) => (
            <div className="col-md-4 col-sm-6 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.name}
                  style={{ height: 250, objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">₹{prod.price} / {prod.unit}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => openOrderForm(prod)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Form Modal */}
      {showForm && selectedProduct && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <form onSubmit={handleSubmit} className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order: {selectedProduct.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Quantity ({selectedProduct.unit})</label>
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    required
                    placeholder={`e.g. 2 ${selectedProduct.unit}`}
                    value={formData.quantity}
                    onChange={handleChange}
                  />

                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {success && (
        <div className="alert alert-success text-center m-4">
          ✅ Order placed successfully!
        </div>
      )}
    </div>
  );
}
