export default function Contact() {
  const contacts = [
    {
      name: 'Sujal Bhaiyye',
      phone: '9503365626',
    },
    {
      name: 'Aniruddha Bhaiyye',
      phone: '9137706691',
    },
  ];

  return (
    <div className="container py-5">
        <nav className="navbar navbar-light bg-light mb-4">
        <a href="/" className="btn btn-outline-primary">🏠 Home</a>
      </nav>
      <h2 className="text-center text-success mb-4">Get in Touch with Us 📞</h2>
      <p className="text-center text-muted mb-5">We’re always happy to serve you fresh!</p>

      <div className="row justify-content-center">
        {contacts.map((person, idx) => (
          <div className="col-md-5 col-sm-10 mb-4" key={idx}>
            <div className="card shadow-sm border-success">
              <div className="card-body text-center">
                <h4 className="card-title text-secondary">{person.name}</h4>
                <p className="card-text">
                  <a href={`tel:${person.phone}`} className="btn btn-outline-primary">
                    📱 {person.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
