import { useState } from 'react';

export default function Products() {
  const [formData, setFormData] = useState({ name: '', address: '', product: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSuccess(true);
      setFormData({ name: '', address: '', product: '' });
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Order Dairy Products</h2>
      {success && <div className="alert alert-success">✅ Order Placed Successfully!</div>}
      <form onSubmit={handleSubmit} className="mx-auto col-12 col-md-8 col-lg-6">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea name="address" className="form-control" required value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Product</label>
          <input type="text" name="product" className="form-control" required value={formData.product} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Place Order</button>
      </form>
    </div>
  );
}
