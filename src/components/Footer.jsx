const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">

        <div className="row mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <h4 className="text-uppercase fw-bold">Weekly Newsletter</h4>
          </div>

          <div className="col-md-6">
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-secondary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-md-3 mb-4">
            <h6 className="text-uppercase text-white fw-bold mb-3">About Us</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Who we are</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Media</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h6 className="text-uppercase text-white fw-bold mb-3">Latest News</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Company Blog</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Announcements</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Events</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h6 className="text-uppercase text-white fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Returns</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h6 className="text-uppercase text-white fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none">Shipping Info</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Order Tracking</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Support</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="row text-secondary ted small">
          <div className="col-md-6 mb-2">
            <p className="mb-0">&copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              123 Example Street, Colombo, Sri Lanka <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
