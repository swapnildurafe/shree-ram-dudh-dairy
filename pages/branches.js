export default function Branches() {
  const branches = [
    { src: '/branches/branch1.jpg', alt: 'Branch 1' },
    { src: '/branches/branch2.jpg', alt: 'Branch 2' },
  ];

  return (
    <div className="container py-5">
        <nav className="navbar navbar-light bg-light mb-4">
        <a href="/" className="btn btn-outline-primary">🏠 Home</a>
      </nav>
      <h2 className="text-center mb-4 text-success">Our Branches 🏢</h2>
      <div className="row justify-content-center">
        {branches.map((img, idx) => (
          <div className="col-md-6 col-sm-12 mb-4" key={idx}>
            <div className="card shadow-sm">
              <img
                src={img.src}
                className="card-img-top"
                alt={img.alt}
                style={{ height: 300, objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
