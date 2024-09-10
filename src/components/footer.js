import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="section footer-area">
    {/* Footer Top */}
    <div className="footer-top ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Footer Title */}
              <h3 className="footer-title text-uppercase mb-2">About Us</h3>
              <ul>
                <li className="py-2"><Link className="text-black-50" to="#">Company Profile</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Testimonials</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Careers</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Partners</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Affiliate Program</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Footer Title */}
              <h3 className="footer-title text-uppercase mb-2">Services</h3>
              <ul>
                <li className="py-2"><Link className="text-black-50" to="#">Web Application</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Product Management</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">User Interaction Design</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">UX Consultant</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Social Media Marketing</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Footer Title */}
              <h3 className="footer-title text-uppercase mb-2">Support</h3>
              <ul>
                <li className="py-2"><Link className="text-black-50" to="#">Frequently Asked</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Terms &amp; Conditions</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Privacy Policy</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Help Center</Link></li>
                <li className="py-2"><Link className="text-black-50" to="#">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            {/* Footer Items */}
            <div className="footer-items">
              {/* Footer Title */}
              <h3 className="footer-title text-uppercase mb-2">Follow Us</h3>
              <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quae.</p>
              {/* Social Icons */}
              <ul className="social-icons list-inline pt-2">
                <li className="list-inline-item px-1"><Link to="#"><i className="fab fa-facebook" /></Link></li>
                <li className="list-inline-item px-1"><Link to="#"><i className="fab fa-twitter" /></Link></li>
                <li className="list-inline-item px-1"><Link to="#"><i className="fab fa-google-plus" /></Link></li>
                <li className="list-inline-item px-1"><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                <li className="list-inline-item px-1"><Link to="#"><i className="fab fa-instagram" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="footer-bottom bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Copyright Area */}
            <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
              {/* Copyright Left */}
              <div className="copyright-left">© Copyrights 2020 Digimax All rights reserved.</div>
              {/* Copyright Right */}
              <div className="copyright-right">Made with <i className="fas fa-heart" /> By <Link to="#">Themeland</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
