// components/Header.js
export default function Header() {
  return (
    <>
      {/* Announcement bar */}
      <div
        style={{
          backgroundColor: '#009ddc',
          color: 'white',
          fontSize: '14px',
          padding: '5px 0',
        }}
        className="text-center"
      >
        All products are pure vegetarian • Please enter your pincode to check delivery availability
      </div>

      {/* Main Header */}
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: '#fffef5', padding: '12px 30px' }}
      >
        <div className="container-fluid">
          {/* Logo and brand */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/logo.png"
              alt="logo"
              height="50"
              width="50"
              className="me-2"
              style={{ objectFit: 'contain' }}
            />
            <div style={{ lineHeight: '1rem' }}>
              <strong style={{ color: '#009ddc', fontSize: '18px' }}>SHREE RAM DUDH DAIRY</strong>
              <br />
              <span style={{ fontSize: '12px', color: '#666' }}>Dedicated to Purity</span>
            </div>
          </a>

          {/* Toggle for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link text-primary fw-bold" href="/">HOME</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-primary fw-bold" href="/farm">OUR FARM</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-primary fw-bold" href="/branches">OUR BRANCHES</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-primary fw-bold" href="/contact">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
