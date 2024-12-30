import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        {/* Logo and Footer Text */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h4>RufuShop</h4>
            <p>&copy; 2024 RufuShop. All Rights Reserved.</p>
          </div>
          {/* Social Media Links */}
          <div className="col-md-6 text-md-end">
            <a href="https://facebook.com" className="text-white mx-2">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://linkedin.com" className="text-white mx-2">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@rufushop.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-md-4">
            <h5>Subscribe to our Newsletter</h5>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary mt-2">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4">
        <small>&copy; 2024 RufuShop. All Rights Reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
