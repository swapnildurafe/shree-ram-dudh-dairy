export default function Farm() {
  const farmImages = [
    '/farm/farm1.jpg',
    '/farm/farm2.jpg',
    '/farm/farm3.jpg',
    '/farm/farm4.jpg',
  ];

  return (
    <div className="container py-5">
      <nav className="navbar navbar-light bg-light mb-4">
        <a href="/" className="btn btn-outline-primary">🏠 Home</a>
      </nav>
      <h2 className="text-center mb-4 text-success">Our Farm 🐄</h2>
      <div className="row">
        {farmImages.map((src, index) => (
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card shadow-sm">
              <img
                src={src}
                className="card-img-top"
                alt={`Farm ${index + 1}`}
                style={{ height: '300px', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
