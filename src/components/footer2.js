import React from 'react'

export default function Footer2() {
  return (
    <footer className="section footer-area" style={{backgroundColor:'#000'}}>
    {/* Footer Top */}
    <div className="footer-top ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Footer Title */}
              <h3 className="footer-title text-white text-uppercase mb-2">
                About Us
              </h3>
              <ul>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Company Profile
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Testimonials
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Careers
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Partners
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Affiliate Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Footer Title */}
              <h3 className="footer-title text-white text-uppercase mb-2">
                Services
              </h3>
              <ul>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Web Application
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Product Management
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    User Interaction Design
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    UX Consultant
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Social Media Marketing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Footer Title */}
              <h3 className="footer-title text-white text-uppercase mb-2">
                Support
              </h3>
              <ul>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Frequently Asked
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Help Center
                  </a>
                </li>
                <li className="py-2">
                  <a className="text-white-50" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Footer Title */}
              <h3 className="footer-title text-white text-uppercase mb-2">
                Follow Us
              </h3>
              <p className="text-white-50 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, quae.
              </p>
              {/* Social Icons */}
              <ul className="social-icons list-inline pt-2">
                <li className="list-inline-item px-1">
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item px-1">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item px-1">
                  <a href="#">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item px-1">
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item px-1">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Copyright Area */}
            <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
              {/* Copyright Left */}
              <div className="copyright-left text-white-50">
                © Copyrights 2020 Digimax All rights reserved.
              </div>
              {/* Copyright Right */}
              <div className="copyright-right text-white-50">
                Made with <i className="fas fa-heart" /> By{" "}
                <a href="#">Themeland</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
