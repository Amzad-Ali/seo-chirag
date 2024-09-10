import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
  {/*====== Scroll To Top Area Start ======*/}
  <div id="scrollUp" title="Scroll To Top">
    <i className="fas fa-arrow-up" />
  </div>
  {/*====== Scroll To Top Area End ======*/}
  <div className="main overflow-hidden">
    {/* ***** Header Start ***** */}
   
    {/* ***** Header End ***** */}
    {/* ***** Breadcrumb Area Start ***** */}
    <section className="section breadcrumb-area overlay-dark d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Breamcrumb Content */}
            <div className="breadcrumb-content d-flex flex-column align-items-center text-center">
              <h2 className="text-white text-uppercase mb-3">About Us</h2>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className="text-uppercase text-white" to="index.html">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="text-uppercase text-white" to="#">
                    Pages
                  </Link>
                </li>
                <li className="breadcrumb-item text-white active">About Us</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Breadcrumb Area End ***** */}
    {/* ***** About Area Start ***** */}
    <section className="section about-area ptb_100">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            {/* About Thumb */}
            <div className="about-thumb text-center">
              <img src="assets/img/about/about_thumb_1.jpg" alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* About Content */}
            <div className="about-content section-heading text-center text-lg-left pl-md-4 mt-5 mt-lg-0 mb-0">
              <h2 className="mb-3">We’re Your Partner in Your Success</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                tenetur maxime labore recusandae enim dolore, nesciunt, porro
                molestias ullam eum atque harum! Consectetur, facilis maxime
                ratione fugiat laborum omnis atque quae, molestiae rem
                perspiciatis veritatis cumque ex minima, numquam quis dicta
                impedit possimus tempore? Quo sequi labore, explicabo sit vitae.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto iure excepturi eos, tenetur minima dignissimos
                repellendus laudantium, rem, quo ipsam esse maiores sequi ex
                debitis quae facilis dolorum voluptates animi.
              </p>
              {/* Counter Area */}
              <div className="couter-area mt-5">
                {/* Single Counter */}
                <div className="single-counter d-block d-md-inline-block m-4 m-md-2">
                  <div className="counter-inner">
                    {/* Counter Item */}
                    <div className="counter-item d-inline-block mb-3">
                      <span className="counter color-1 fw-7">375</span>
                      <span className="color-1 fw-7">+</span>
                    </div>
                  </div>
                  <h4 className="text-uppercase fw-7">Happy Clients</h4>
                </div>
                {/* Single Counter */}
                <div className="single-counter d-block d-md-inline-block m-4 m-md-2">
                  <div className="counter-inner">
                    {/* Counter Item */}
                    <div className="counter-item d-inline-block mb-3">
                      <span className="counter color-2 fw-7">1500</span>
                      <span className="color-2 fw-7">+</span>
                    </div>
                  </div>
                  <h4 className="text-uppercase fw-7">Projects Completed</h4>
                </div>
                {/* Single Counter */}
                <div className="single-counter d-block d-md-inline-block m-4 m-md-2">
                  <div className="counter-inner">
                    {/* Counter Item */}
                    <div className="counter-item d-inline-block mb-3">
                      <span className="counter color-3 fw-7">695</span>
                      <span className="color-3 fw-7">+</span>
                    </div>
                  </div>
                  <h4 className="text-uppercase fw-7">Running Projects</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** About Area End ***** */}
    {/* ***** Our Goal Area Start ***** */}
    <section className="section our-goal ptb_100">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            {/* Goal Content */}
            <div className="goal-content section-heading text-center text-lg-left pr-md-4 mb-0">
              <h2 className="mb-3">Our Goal</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                tenetur maxime labore recusandae enim dolore, nesciunt, porro
                molestias ullam eum atque harum! Consectetur, facilis maxime
                ratione fugiat laborum omnis atque quae, molestiae rem
                perspiciatis veritatis cumque ex minima, numquam quis dicta
                impedit possimus tempore? Quo sequi labore, explicabo sit vitae.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto iure excepturi eos, tenetur minima dignissimos
                repellendus laudantium, rem, quo ipsam esse maiores sequi ex
                debitis quae facilis dolorum voluptates animi.
              </p>
              <Link to="#" className="btn btn-bordered mt-4">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Goal Thumb */}
            <div className="goal-thumb mt-5 mt-lg-0">
              <img src="assets/img/about/about_thumb_2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Our Goal Area End ***** */}
    {/* ***** Team Area Start ***** */}
    <section className="section team-area bg-grey ptb_100">
      {/* Shape Top */}
      <div className="shape shape-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="#FFFFFF"
        >
          <path
            className="shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2>Our Experts</h2>
              <p className="d-none d-sm-block mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
              <p className="d-block d-sm-none mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Team */}
            <div className="single-team">
              {/* Team Photo */}
              <div className="team-photo">
                <Link to="#">
                  <img src="assets/img/team/thumb_1.jpg" alt="" />
                </Link>
              </div>
              {/* Team Content */}
              <div className="team-content p-3">
                <Link to="#">
                  <h3 className="mb-2">Junaid Hasan</h3>
                </Link>
                <h5 className="text-uppercase">Marketing Officer</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Team */}
            <div className="single-team">
              {/* Team Photo */}
              <div className="team-photo">
                <Link to="#">
                  <img src="assets/img/team/thumb_2.jpg" alt="" />
                </Link>
              </div>
              {/* Team Content */}
              <div className="team-content p-3">
                <Link to="#">
                  <h3 className="mb-2">Yasmin Akter</h3>
                </Link>
                <h5 className="text-uppercase">SEO Expert</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Team */}
            <div className="single-team">
              {/* Team Photo */}
              <div className="team-photo">
                <Link to="#">
                  <img src="assets/img/team/thumb_3.jpg" alt="" />
                </Link>
              </div>
              {/* Team Content */}
              <div className="team-content p-3">
                <Link to="#">
                  <h3 className="mb-2">Md. Arham</h3>
                </Link>
                <h5 className="text-uppercase">Media Controller</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Team */}
            <div className="single-team">
              {/* Team Photo */}
              <div className="team-photo">
                <Link to="#">
                  <img src="assets/img/team/thumb_4.jpg" alt="" />
                </Link>
              </div>
              {/* Team Content */}
              <div className="team-content p-3">
                <Link to="#">
                  <h3 className="mb-2">Jassica William</h3>
                </Link>
                <h5 className="text-uppercase">Data Analyst</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Team */}
            <div className="single-team">
              {/* Team Photo */}
              <div className="team-photo">
                <Link to="#">
                  <img src="assets/img/team/thumb_5.jpg" alt="" />
                </Link>
              </div>
              {/* Team Content */}
              <div className="team-content p-3">
                <Link to="#">
                  <h3 className="mb-2">John Doe</h3>
                </Link>
                <h5 className="text-uppercase">Web Developer</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Team */}
            <div className="single-team">
              {/* Team Photo */}
              <div className="team-photo">
                <Link to="#">
                  <img src="assets/img/team/thumb_6.jpg" alt="" />
                </Link>
              </div>
              {/* Team Content */}
              <div className="team-content p-3">
                <Link to="#">
                  <h3 className="mb-2">Sara Scotch</h3>
                </Link>
                <h5 className="text-uppercase">Graphic Designer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape Bottom */}
      <div className="shape shape-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="#FFFFFF"
        >
          <path
            className="shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>
    </section>
    {/* ***** Team Area End ***** */}
    {/*====== Contact Area Start ======*/}
    <section id="contact" className="contact-area ptb_100">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-5">
            {/* Section Heading */}
            <div className="section-heading text-center mb-3">
              <h2>Let's connect!</h2>
              <p className="d-none d-sm-block mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
              <p className="d-block d-sm-none mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati.
              </p>
            </div>
            {/* Contact Us */}
            <div className="contact-us">
              <ul>
                {/* Contact Info */}
                <li className="contact-info color-1 bg-hover active hover-bottom text-center p-5 m-3">
                  <span>
                    <i className="fas fa-mobile-alt fa-3x" />
                  </span>
                  <Link className="d-block my-2" to="#">
                    <h3>+89 (0) 2354 5470091</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
                {/* Contact Info */}
                <li className="contact-info color-3 bg-hover active hover-bottom text-center p-5 m-3">
                  <span>
                    <i className="fas fa-envelope-open-text fa-3x" />
                  </span>
                  <Link className="d-none d-sm-block my-2" to="#">
                    <h3>mail@company.com</h3>
                  </Link>
                  <Link className="d-block d-sm-none my-2" to="#">
                    <h3>mail@your company.com</h3>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-4 pt-lg-0">
            {/* Contact Box */}
            <div className="contact-box text-center">
              {/* Contact Form */}
              <form
                id="contact-form"
                method="POST"
                action="https://theme-land.com/digimx/demo/assets/php/mail.php"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Company Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Phone"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-bordered active btn-block mt-3"
                    >
                      <span className="text-white pr-3">
                        <i className="fas fa-paper-plane" />
                      </span>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*====== Contact Area End ======*/}
    {/*====== Call To Action Area Start ======*/}
    <section className="section cta-area bg-overlay ptb_100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {/* Section Heading */}
            <div className="section-heading text-center m-0">
              <h2 className="text-white">
                Looking for the best digital agency &amp; marketing solution?
              </h2>
              <p className="text-white d-none d-sm-block mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
              <p className="text-white d-block d-sm-none mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati.
              </p>
              <Link to="#" className="btn btn-bordered-white mt-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*====== Call To Action Area End ======*/}
    {/*====== Footer Area Start ======*/}

    {/*====== Footer Area End ======*/}
    {/*====== Modal Search Area Start ======*/}
    <div id="search" className="modal fade p-0">
      <div className="modal-dialog dialog-animated">
        <div className="modal-content h-100">
          <div className="modal-header" data-dismiss="modal">
            Search <i className="far fa-times-circle icon-close" />
          </div>
          <div className="modal-body">
            <form className="row">
              <div className="col-12 align-self-center">
                <div className="row">
                  <div className="col-12 pb-3">
                    <h2 className="search-title mb-3">
                      What are you looking for?
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent diam lacus, dapibus sed imperdiet consectetur.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your keywords"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-group align-self-center">
                    <button className="btn btn-bordered mt-3">Search</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/*====== Modal Search Area End ======*/}
    {/*====== Modal Responsive Menu Area Start ======*/}
    <div id="menu" className="modal fade p-0">
      <div className="modal-dialog dialog-animated">
        <div className="modal-content h-100">
          <div className="modal-header" data-dismiss="modal">
            Menu <i className="far fa-times-circle icon-close" />
          </div>
          <div className="menu modal-body">
            <div className="row w-100">
              <div className="items p-0 col-12 text-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*====== Modal Responsive Menu Area End ======*/}
  </div>
</>

  )
}
