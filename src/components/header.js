import React from 'react';
import { Link } from 'react-router-dom';
// import './header.css';
const Header = () => {
    return (
      

    <header id="header">
  {/* Navbar */}
  <nav  className="navbar navbar-expand">
    <div className="container header">
      {/* Navbar Brand*/}
      <Link className="navbar-brand" to="/">
        <img className="navbar-brand-regular" src="assets/img/logo/logo-white.png" alt="brand-logo" />
        <img className="navbar-brand-sticky" src="assets/img/logo/logo.png" alt="sticky brand-logo" />
      </Link>
      <div className="ml-auto" />
      {/* Navbar */}
      <ul className="navbar-nav items">
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/">Home </Link>
          {/* <ul className="dropdown-menu">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Multi-Page <i className="fas fa-angle-right ml-1" /></Link>
              <ul className="dropdown-menu">
                <li className="nav-item"><Link to="index.html" className="nav-link">Homepage 1</Link></li>
                <li className="nav-item"><Link to="index-2.html" className="nav-link">Homepage 2</Link></li>
                <li className="nav-item"><Link to="index-3.html" className="nav-link">Homepage 3</Link></li>
                <li className="nav-item"><Link to="index-4.html" className="nav-link">Homepage 4</Link></li>
                <li className="nav-item"><Link to="index-5.html" className="nav-link">Homepage 5</Link></li>
                <li className="nav-item"><Link to="index-6.html" className="nav-link">Homepage 6</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">One-Page <i className="fas fa-angle-right ml-1" /></Link>
              <ul className="dropdown-menu">
                <li className="nav-item"><Link to="index-one-page.html" className="nav-link">Homepage 1</Link></li>
                <li className="nav-item"><Link to="index-2-one-page.html" className="nav-link">Homepage 2</Link></li>
                <li className="nav-item"><Link to="index-3-one-page.html" className="nav-link">Homepage 3</Link></li>
                <li className="nav-item"><Link to="index-4-one-page.html" className="nav-link">Homepage 4</Link></li>
                <li className="nav-item"><Link to="index-5-one-page.html" className="nav-link">Homepage 5</Link></li>
                <li className="nav-item"><Link to="index-6-one-page.html" className="nav-link">Homepage 6</Link></li>
              </ul>
            </li>
          </ul> */}
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">Pages </Link>
          {/* <i className="fas fa-angle-down ml-1" /> */}
          {/* <ul className="dropdown-menu">
            <li className="nav-item"><Link to="about.html" className="nav-link">About Us</Link></li>
            <li className="nav-item"><Link to="services.html" className="nav-link">Our Services</Link></li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Our Portfolio <i className="fas fa-angle-right ml-1" /></Link>
              <ul className="dropdown-menu">
                <li className="nav-item"><Link to="portfolio-grid.html" className="nav-link">Portfolio Grid</Link></li>
                <li className="nav-item"><Link to="portfolio-minimal.html" className="nav-link">Portfolio Minimal</Link></li>
                <li className="nav-item"><Link to="portfolio-no-gap.html" className="nav-link">Portfolio No Gap</Link></li>
                <li className="nav-item"><Link to="portfolio-masonry.html" className="nav-link">Portfolio Masonry</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="team.html" className="nav-link">Our Team</Link></li>
            <li className="nav-item"><Link to="pricing.html" className="nav-link">Pricing</Link></li>
            <li className="nav-item"><Link to="contact.html" className="nav-link">Contact</Link></li>
            <li className="nav-item"><Link to="404.html" className="nav-link">404</Link></li>
          </ul> */}
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="blog">Blog Pages</Link>
          {/* <ul className="dropdown-menu">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Blog Grid <i className="fas fa-angle-right ml-1" /></Link>
              <ul className="dropdown-menu">
                <li className="nav-item"><Link to="blog-two-column.html" className="nav-link">Grid 2 Column</Link></li>
                <li className="nav-item"><Link to="blog-three-column.html" className="nav-link">Grid 3 Column</Link></li>
                <li className="nav-item"><Link to="blog-left-sidebar.html" className="nav-link">Left Sidebar</Link></li>
                <li className="nav-item"><Link to="blog-right-sidebar.html" className="nav-link">Right Sidebar</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Blog Single <i className="fas fa-angle-right ml-1" /></Link>
              <ul className="dropdown-menu">
                <li className="nav-item"><Link to="blog-details-left-sidebar.html" className="nav-link">Single Left Sidebar</Link></li>
                <li className="nav-item"><Link to="blog-details-right-sidebar.html" className="nav-link">Single Right Sidebar</Link></li>
              </ul>
            </li>
          </ul> */}
        </li>
      </ul>
      {/* Navbar Icons */}
      <ul className="navbar-nav icons">
        <li className="nav-item">
          <Link to="#" className="nav-link" data-toggle="modal" data-target="#search">
            <i className="fas fa-search" />
          </Link>
        </li>
        <li className="nav-item social">
          <Link to="#" className="nav-link"><i className="fab fa-facebook-f" /></Link>
        </li>
        <li className="nav-item social">
          <Link to="#" className="nav-link"><i className="fab fa-twitter" /></Link>
        </li>
      </ul>
      {/* Navbar Toggler */}
      <ul className="navbar-nav toggle">
        <li className="nav-item">
          <Link to="#" className="nav-link" data-toggle="modal" data-target="#menu">
            <i className="fas fa-bars toggle-icon m-0" />
          </Link>
        </li>
      </ul>
      {/* Navbar Action Button */}
      <ul className="navbar-nav action">
        <li className="nav-item ml-3">
          <Link to="#" className="btn ml-lg-auto btn-bordered-white"><i className="fas fa-paper-plane contact-icon mr-md-2" />Contact Us</Link>
        </li>
      </ul>
    </div>
  </nav>
</header>



    );
};

export default Header;
