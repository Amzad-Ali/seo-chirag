import React from 'react'
import { Link } from 'react-router-dom'
export default function Services() {
    const componetPath = window.location.pathname;
    console.log("componetPath====>",componetPath);
  return (
    <div>
        

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
            <div className="breadcrumb-content text-center">
              <h2 className="text-white text-uppercase mb-3">What we offer</h2>
              <ol className="breadcrumb d-flex justify-content-center">
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
                <li className="breadcrumb-item text-white active">
                  Our Services
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Breadcrumb Area End ***** */}
    {/* ***** Service Area End ***** */}
    <section id="service" className="section service-area ptb_150">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Service */}
            <div className="single-service text-center p-4">
              <span className="flaticon-rocket-launch color-1 icon-bg-1" />
              <h3 className="my-3">Data Analytics</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt emit.
              </p>
              <Link className="service-btn mt-3" to="#">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Service */}
            <div className="single-service text-center p-4">
              <span className="flaticon-monitoring color-2 icon-bg-2" />
              <h3 className="my-3">Website Growth</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt emit.
              </p>
              <Link className="service-btn mt-3" to="#">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Service */}
            <div className="single-service text-center p-4">
              <span className="flaticon-web color-3 icon-bg-3" />
              <h3 className="my-3">Seo Ranking</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt emit.
              </p>
              <Link className="service-btn mt-3" to="#">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Service */}
            <div className="single-service text-center p-4">
              <span className="flaticon-smartphone color-4 icon-bg-4" />
              <h3 className="my-3">App Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt emit.
              </p>
              <Link className="service-btn mt-3" to="#">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Service */}
            <div className="single-service text-center p-4">
              <span className="flaticon-email color-5 icon-bg-5" />
              <h3 className="my-3">Email Marketing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt emit.
              </p>
              <Link className="service-btn mt-3" to="#">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Service */}
            <div className="single-service text-center p-4">
              <span className="flaticon-affiliate color-6 icon-bg-6" />
              <h3 className="my-3">Affiliate Marketing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                do eiusmod tempor incididunt emit.
              </p>
              <Link className="service-btn mt-3" to="#">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Service Area End ***** */}
    {/* ***** Review Area Start ***** */}
    <section id="review" className="section review-area bg-overlay ptb_100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-white">Our clients says</h2>
              <p className="text-white d-none d-sm-block mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
              <p className="text-white d-block d-sm-none mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 res-margin">
            {/* Single Review */}
            <div className="single-review bg-white p-5">
              {/* Review Content */}
              <div className="review-content">
                {/* Review Text */}
                <div className="review-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam est modi amet error earum aperiam, fuga labore facere
                    rem ab nemo possimus cum excepturi expedita. Culpa rerum,
                    quaerat qui non.
                  </p>
                </div>
                {/* Quotation Icon */}
                <div className="quot-icon">
                  <img
                    className="avatar-sm"
                    src="assets/img/quote.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Reviewer */}
              <div className="reviewer media mt-3">
                {/* Reviewer Thumb */}
                <div className="reviewer-thumb">
                  <img
                    className="avatar-lg radius-100"
                    src="assets/img/avatar/avatar-1.png"
                    alt=""
                  />
                </div>
                {/* Reviewer Media */}
                <div className="reviewer-meta media-body align-self-center ml-4">
                  <h5 className="reviewer-name color-primary mb-2">
                    Junaid Hasan
                  </h5>
                  <h6 className="text-secondary fw-6">CEO, Themeland</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 res-margin">
            {/* Single Review */}
            <div className="single-review bg-white p-5">
              {/* Review Content */}
              <div className="review-content">
                {/* Review Text */}
                <div className="review-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam est modi amet error earum aperiam, fuga labore facere
                    rem ab nemo possimus cum excepturi expedita. Culpa rerum,
                    quaerat qui non.
                  </p>
                </div>
                {/* Quotation Icon */}
                <div className="quot-icon">
                  <img
                    className="avatar-sm"
                    src="assets/img/quote.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Reviewer */}
              <div className="reviewer media mt-3">
                {/* Reviewer Thumb */}
                <div className="reviewer-thumb">
                  <img
                    className="avatar-lg radius-100"
                    src="assets/img/avatar/avatar-2.png"
                    alt=""
                  />
                </div>
                {/* Reviewer Media */}
                <div className="reviewer-meta media-body align-self-center ml-4">
                  <h5 className="reviewer-name color-primary mb-2">
                    Yasmin Akter
                  </h5>
                  <h6 className="text-secondary fw-6">Founder, Themeland</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {/* Single Review */}
            <div className="single-review bg-white p-5">
              {/* Review Content */}
              <div className="review-content">
                {/* Review Text */}
                <div className="review-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam est modi amet error earum aperiam, fuga labore facere
                    rem ab nemo possimus cum excepturi expedita. Culpa rerum,
                    quaerat qui non.
                  </p>
                </div>
                {/* Quotation Icon */}
                <div className="quot-icon">
                  <img
                    className="avatar-sm"
                    src="assets/img/quote.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Reviewer */}
              <div className="reviewer media mt-3">
                {/* Reviewer Thumb */}
                <div className="reviewer-thumb">
                  <img
                    className="avatar-lg radius-100"
                    src="assets/img/avatar/avatar-3.png"
                    alt=""
                  />
                </div>
                {/* Reviewer Media */}
                <div className="reviewer-meta media-body align-self-center ml-4">
                  <h5 className="reviewer-name color-primary mb-2">
                    Md. Arham
                  </h5>
                  <h6 className="text-secondary fw-6">CEO, Themeland</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Review Area End ***** */}
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
</div>
  )
}
