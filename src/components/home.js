import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="homepage-3">
    <div>
     {/*====== Preloader Area Start ======*/}
    
     {/*====== Preloader Area End ======*/}
     {/*====== Scroll To Top Area Start ======*/}
     <div id="scrollUp" title="Scroll To Top">
       <i className="fas fa-arrow-up" />
     </div>
     {/*====== Scroll To Top Area End ======*/}
     <div className="main overflow-hidden">
       {/* ***** Header Start ***** */}
      
     {/* Hello world */}
    {/* <Header/> */}
   
   
       {/* ***** Header End ***** */}
       {/* ***** Welcome Area Start ***** */}
       <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
         <div className="container">
           <div className="row align-items-center">
             {/* Welcome Intro Start */}
             <div className="col-12 col-md-6">
               <div className="welcome-intro">
                 <h1 className="text-white text-center text-md-left">Marketing <br /> <span className="fw-4">strategy</span></h1>
                 <p className="text-white text-center text-md-left my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.</p>
                 {/* Buttons */}
                 <div className="button-group d-flex align-items-center justify-content-center justify-content-md-start">
                   <Link to="#" className="btn btn-bordered-white">Start a Project</Link>
                   {/* Play Button */}
                   <Link className="play-btn" data-fancybox data-width={640} data-height={360} data-small-btn="true" to="https://youtu.be/TKnufs85hXk">
                     <div className="btn-circle play-animation" />
                     <div className="btn-circle play-animation animation-short" />
                     {/* Play Icon */}
                     <div className="play-icon">
                       <i className="fas fa-play" />
                     </div>
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-12 col-md-6">
               {/* Welcome Thumb */}
               <div className="welcome-thumb-wrapper pt-3 pt-md-5 mt-5">
                 <span className="welcome-thumb-1">
                   <img className="welcome-animation d-block ml-auto" src="assets/img/welcome/thumb_7.png" alt="" />
                 </span>
                 <span className="welcome-thumb-2">
                   <img className="welcome-animation d-block" src="assets/img/welcome/thumb_8.png" alt="" />
                 </span>
                 <span className="welcome-thumb-3">
                   <img className="welcome-animation d-block" src="assets/img/welcome/thumb_9.png" alt="" />
                 </span>
                 <span className="welcome-thumb-4">
                   <img className="welcome-animation d-block" src="assets/img/welcome/thumb_10.png" alt="" />
                 </span>
               </div>
             </div>
           </div>
         </div>
         {/* Shape Bottom */}
         <div className="welcome-shape">
           <img src="assets/img/hero_shape.png" alt="" />
         </div>
       </section>
       {/* ***** Welcome Area End ***** */}
       {/* ***** Promo Area Start ***** */}
       <section className="section promo-area ptb_100">
         <div className="container">
           <div className="row">
             <div className="col-12 col-md-6 col-lg-4 res-margin">
               {/* Single Promo */}
               <div className="single-promo grad-hover text-center p-5">
                 {/* Promo Wrapper */}
                 <div className="promo-wrapper">
                   <h3 className="mb-3">Zero to Hero</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Aspernatur provident unde</strong> ex eligendi magni sit impedit iusto, sed ad fuga minima, dignissimos ducimus autem molestias, nostrum nesciunt enim? Ea, non hic voluptates dolorum impedit eveniet dolorem temporibus illo incidunt quis minima facere doloribus sit maiores, blanditiis labore quasi, accusantium quaerat!</p>
                 </div>
               </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4 res-margin">
               {/* Single Promo */}
               <div className="single-promo grad-hover active text-center p-5">
                 {/* Promo Wrapper */}
                 <div className="promo-wrapper">
                   <h3 className="mb-3">Dedicated Support</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident unde ex eligendi magni sit impedit iusto, sed ad fuga minima, <strong>dignissimos ducimus autem</strong> molestias, nostrum nesciunt enim? Ea, non hic voluptates dolorum impedit eveniet dolorem temporibus illo incidunt quis minima facere doloribus sit maiores, blanditiis labore quasi, accusantium quaerat!</p>
                 </div>
               </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
               {/* Single Promo */}
               <div className="single-promo grad-hover text-center p-5">
                 {/* Promo Wrapper */}
                 <div className="promo-wrapper">
                   <h3 className="mb-3">100% Up-time</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident unde ex eligendi magni sit impedit iusto, sed ad fuga minima, dignissimos ducimus autem molestias, nostrum nesciunt enim? Ea, non hic voluptates <strong>dolorum impedit eveniet dolorem temporibus</strong> illo incidunt quis minima facere doloribus sit maiores, blanditiis labore quasi, accusantium quaerat!</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* ***** Promo Area End ***** */}
       {/* ***** Content Area Start ***** */}
       <section className="section content-area bg-grey ptb_100">
         <div className="container">
           <div className="row justify-content-between">
             <div className="col-12 col-lg-6">
               {/* Content Inner */}
               <div className="content-inner text-center">
                 {/* Section Heading */}
                 <div className="section-heading text-center mb-3">
                   <h2>We help to grow your business.</h2>
                   <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                   <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                 </div>
                 {/* Content List */}
                 <ul className="content-list text-left">
                   {/* Single Content List */}
                   <li className="single-content-list media py-2">
                     <div className="content-icon pr-4">
                       <span className="color-1"><i className="fas fa-angle-double-right" /></span>
                     </div>
                     <div className="content-text media-body">
                       <span><b>Online Presence</b><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.</span>
                     </div>
                   </li>
                   {/* Single Content List */}
                   <li className="single-content-list media py-2">
                     <div className="content-icon pr-4">
                       <span className="color-1"><i className="fas fa-angle-double-right" /></span>
                     </div>
                     <div className="content-text media-body">
                       <span><b>Marketing Stretagy</b><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.</span>
                     </div>
                   </li>
                   {/* Single Content List */}
                   <li className="single-content-list media py-2">
                     <div className="content-icon pr-4">
                       <span className="color-1"><i className="fas fa-angle-double-right" /></span>
                     </div>
                     <div className="content-text media-body">
                       <span><b>Promote Local Sales</b><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.</span>
                     </div>
                   </li>
                 </ul>
                 <Link to="#" className="btn btn-bordered mt-4">Learn More</Link>
               </div>
             </div>
             <div className="col-12 col-lg-6">
               {/* Service Thumb */}
               <div className="service-thumb mx-auto pt-4 pt-lg-0">
                 <img src="assets/img/content/content_thumb.png" alt="" />
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* ***** Content Area End ***** */}
       {/* ***** Content Area Start ***** */}
       <section className="section content-area ptb_100">
         <div className="container">
           <div className="row justify-content-between">
             <div className="col-12 col-lg-6">
               {/* Profile Circle Wrapper */}
               <div className="profile-circle-wrapper circle-animation d-none d-sm-block">
                 {/* Profile Inner */}
                 <div className="profile-inner">
                   {/* Profile Circle */}
                   <div className="profile-circle circle-lg">
                     <span className="profile-icon icon-1">
                       <img className="icon-1-img" src="assets/img/content/profile-icons/profile_icon_1.svg" alt=""/>
                     </span>
                     <span className="profile-icon icon-2">
                       <img className="icon-2-img" src="assets/img/content/profile-icons/profile_icon_2.svg" alt="" />
                     </span>
                     <span className="profile-icon icon-3">
                       <img className="icon-3-img" src="assets/img/content/profile-icons/profile_icon_1.svg" alt="" />
                     </span>
                     <span className="profile-icon icon-4">
                       <img className="icon-4-img" src="assets/img/content/profile-icons/profile_icon_2.svg" alt="" />
                     </span>
                   </div>
                   {/* Profile Circle */}
                   <div className="profile-circle circle-md">
                     <span className="profile-icon icon-5">
                       <img className="icon-5-img" src="assets/img/content/profile-icons/profile_icon_3.svg" alt="" />
                     </span>
                     <span className="profile-icon icon-6">
                       <img className="icon-6-img" src="assets/img/content/profile-icons/profile_icon_3.svg" alt="" />
                     </span>
                     <span className="profile-icon icon-7">
                       <img className="icon-7-img" src="assets/img/content/profile-icons/profile_icon_3.svg" alt="" />
                     </span>
                   </div>
                   {/* Profile Circle */}
                   <div className="profile-circle circle-sm">
                     <span className="profile-icon icon-8">
                       <img className="icon-8-img" src="assets/img/content/profile-icons/profile_icon_4.svg" alt="" />
                     </span>
                     <span className="profile-icon icon-9">
                       <img className="icon-9-img" src="assets/img/content/profile-icons/profile_icon_4.svg" alt="" />
                     </span>
                   </div>
                 </div>
                 <img className="folder-img" src="assets/img/content/folders.png" alt="" />
               </div>
             </div>
             <div className="col-12 col-lg-6">
               {/* Content Inner */}
               <div className="content-inner text-center pt-sm-4 pt-lg-0 mt-sm-5 mt-lg-0">
                 {/* Section Heading */}
                 <div className="section-heading text-center mb-3">
                   <h2>Work smarter,<br /> not harder.</h2>
                   <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                   <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                 </div>
                 {/* Content List */}
                 <ul className="content-list text-left">
                   {/* Single Content List */}
                   <li className="single-content-list media py-2">
                     <div className="content-icon pr-4">
                       <span className="color-2"><i className="fas fa-angle-double-right" /></span>
                     </div>
                     <div className="content-text media-body">
                       <span><b>Digital Agency &amp; Marketing</b><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.</span>
                     </div>
                   </li>
                   {/* Single Content List */}
                   <li className="single-content-list media py-2">
                     <div className="content-icon pr-4">
                       <span className="color-2"><i className="fas fa-angle-double-right" /></span>
                     </div>
                     <div className="content-text media-body">
                       <span><b>Planning To Startup</b><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.</span>
                     </div>
                   </li>
                   {/* Single Content List */}
                   <li className="single-content-list media py-2">
                     <div className="content-icon pr-4">
                       <span className="color-2"><i className="fas fa-angle-double-right" /></span>
                     </div>
                     <div className="content-text media-body">
                       <span><b>Content Management</b><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio.</span>
                     </div>
                   </li>
                 </ul>
                 <Link to="#" className="btn btn-bordered mt-4">Learn More</Link>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* ***** Content Area End ***** */}
       {/* ***** Service Area End ***** */}
       <section id="service" className="section service-area bg-grey ptb_100">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-12 col-md-10 col-lg-7">
               {/* Section Heading */}
               <div className="section-heading text-center">
                 <h2>We provide the best digital services</h2>
                 <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                 <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-12 col-md-6 col-lg-4">
               {/* Single Service */}
               <div className="single-service text-center p-4">
                 <span className="flaticon-rocket-launch color-1 icon-bg-1" />
                 <h3 className="my-3">Data Analytics</h3>
                 <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt emit.</p>
                 <Link className="service-btn mt-3" to="#">Learn More</Link>
               </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
               {/* Single Service */}
               <div className="single-service text-center p-4">
                 <span className="flaticon-monitoring color-2 icon-bg-2" />
                 <h3 className="my-3">Website Growth</h3>
                 <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt emit.</p>
                 <Link className="service-btn mt-3" to="#">Learn More</Link>
               </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
               {/* Single Service */}
               <div className="single-service text-center p-4">
                 <span className="flaticon-web color-3 icon-bg-3" />
                 <h3 className="my-3">Seo Ranking</h3>
                 <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt emit.</p>
                 <Link className="service-btn mt-3" to="#">Learn More</Link>
               </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
               {/* Single Service */}
               <div className="single-service text-center p-4">
                 <span className="flaticon-smartphone color-4 icon-bg-4" />
                 <h3 className="my-3">App Development</h3>
                 <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt emit.</p>
                 <Link className="service-btn mt-3" to="#">Learn More</Link>
               </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
               {/* Single Service */}
               <div className="single-service text-center p-4">
                 <span className="flaticon-email color-5 icon-bg-5" />
                 <h3 className="my-3">Email Marketing</h3>
                 <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt emit.</p>
                 <Link className="service-btn mt-3" to="#">Learn More</Link>
               </div>
             </div>
             <div className="col-12 col-md-6 col-lg-4">
               {/* Single Service */}
               <div className="single-service text-center p-4">
                 <span className="flaticon-affiliate color-6 icon-bg-6" />
                 <h3 className="my-3">Affiliate Marketing</h3>
                 <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt emit.</p>
                 <Link className="service-btn mt-3" to="#">Learn More</Link>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* ***** Service Area End ***** */}
       {/* ***** Price Plan Area Start ***** */}
       <section id="pricing" className="section price-plan-area overflow-hidden ptb_100">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-12 col-md-10 col-lg-7">
               {/* Section Heading */}
               <div className="section-heading text-center">
                 <h2>Our Price Plans</h2>
                 <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                 <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-12 col-lg-8">
               <div className="row price-plan-wrapper">
                 <div className="col-12 col-md-6">
                   {/* Single Price Plan */}
                   <div className="single-price-plan color-1 bg-hover hover-top text-center p-5">
                     {/* Plan Title */}
                     <div className="plan-title mb-2 mb-sm-3">
                       <h3 className="mb-2">Basic</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nemo.</p>
                     </div>
                     {/* Plan Price */}
                     <div className="plan-price pb-2 pb-sm-3">
                       <span className="color-primary fw-7">$</span>
                       <span className="h1 fw-7">49</span>
                       <sub className="validity text-muted fw-5">/mo</sub>
                     </div>
                     {/* Plan Description */}
                     <div className="plan-description">
                       <ul className="plan-features">
                         <li className="py-2">5GB Linux Web Space</li>
                         <li className="py-2">5 MySQL Databases</li>
                         <li className="py-2 text-muted">24/7 Tech Support</li>
                         <li className="py-2 text-muted">Daily Backups</li>
                       </ul>
                     </div>
                     {/* Plan Button */}
                     <div className="plan-button">
                       <Link to="#" className="btn btn-bordered mt-3">Get Started</Link>
                     </div>
                   </div>
                 </div>
                 <div className="col-12 col-md-6 mt-4 mt-md-0">
                   {/* Single Price Plan */}
                   <div className="single-price-plan color-2 bg-hover active hover-top text-center p-5">
                     {/* Plan Title */}
                     <div className="plan-title mb-2 mb-sm-3">
                       <h3 className="mb-2">Pro <sup><span className="badge badge-pill badge-warning ml-2">Recommended</span></sup></h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nemo.</p>
                     </div>
                     {/* Plan Price */}
                     <div className="plan-price pb-2 pb-sm-3">
                       <span className="color-primary fw-7">$</span>
                       <span className="h1 fw-7">129</span>
                       <sub className="validity text-muted fw-5">/mo</sub>
                     </div>
                     {/* Plan Description */}
                     <div className="plan-description">
                       <ul className="plan-features">
                         <li className="py-2">10GB Linux Web Space</li>
                         <li className="py-2">50 MySQL Databases</li>
                         <li className="py-2">Unlimited Email</li>
                         <li className="py-2">Daily Backups</li>
                       </ul>
                     </div>
                     {/* Plan Button */}
                     <div className="plan-button">
                       <Link to="#" className="btn btn-bordered active mt-3">Get Started</Link>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="row justify-content-center pt-5">
             <p className="pt-4 fw-5">Not sure what to choose? <Link className="service-btn" to="#"><strong>Contact Us</strong></Link></p>
           </div>
         </div>
       </section>
       {/* ***** Price Plan Area End ***** */}
       {/* ***** Review Area Start ***** */}
       <section id="review" className="section review-area bg-overlay ptb_100">
         <div className="container">
           <div className="row justify-content-center align-items-center">
             <div className="col-12 col-lg-4">
               {/* Section Heading */}
               <div className="section-heading m-0">
                 <h2 className="text-white">Customers loves us</h2>
                 <p className="text-white d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                 <p className="text-white d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                 <Link to="#" className="btn btn-bordered-white mt-4">Work with Us</Link>
               </div>
             </div>
             <div className="col-12 col-lg-8">
               <div className="row mt-5 mt-lg-0">
                 <div className="col-12 col-md-6 res-margin">
                   {/* Single Review */}
                   <div className="single-review bg-inherit p-5">
                     {/* Review Content */}
                     <div className="review-content">
                       {/* Review Text */}
                       <div className="review-text">
                         <p className="text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam est modi amet error earum aperiam, fuga labore facere rem ab nemo possimus cum excepturi expedita. Culpa rerum, quaerat qui non.</p>
                       </div>
                       {/* Quotation Icon */}
                       <div className="quot-icon">
                         <img className="avatar-sm" src="assets/img/quote.png" alt="" />
                       </div>
                     </div>
                     {/* Reviewer */}
                     <div className="reviewer media mt-3">
                       {/* Reviewer Thumb */}
                       <div className="reviewer-thumb">
                         <img className="avatar-lg radius-100" src="assets/img/avatar/avatar-1.png" alt="" />
                       </div>
                       {/* Reviewer Media */}
                       <div className="reviewer-meta media-body align-self-center ml-4">
                         <h5 className="reviewer-name text-white mb-2">Junaid Hasan</h5>
                         <h6 className="text-white-50 fw-6">CEO, Themeland</h6>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-12 col-md-6">
                   {/* Single Review */}
                   <div className="single-review bg-inherit p-5">
                     {/* Review Content */}
                     <div className="review-content">
                       {/* Review Text */}
                       <div className="review-text">
                         <p className="text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam est modi amet error earum aperiam, fuga labore facere rem ab nemo possimus cum excepturi expedita. Culpa rerum, quaerat qui non.</p>
                       </div>
                       {/* Quotation Icon */}
                       <div className="quot-icon">
                         <img className="avatar-sm" src="assets/img/quote.png" alt="" />
                       </div>
                     </div>
                     {/* Reviewer */}
                     <div className="reviewer media mt-3">
                       {/* Reviewer Thumb */}
                       <div className="reviewer-thumb">
                         <img className="avatar-lg radius-100" src="assets/img/avatar/avatar-2.png" alt="" />
                       </div>
                       {/* Reviewer Media */}
                       <div className="reviewer-meta media-body align-self-center ml-4">
                         <h5 className="reviewer-name text-white mb-2">Yasmin Akter</h5>
                         <h6 className="text-white-50 fw-6">Designer, Themeland</h6>
                       </div>
                     </div>
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
                 <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                 <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
               </div>
               {/* Contact Us */}
               <div className="contact-us">
                 <ul>
                   {/* Contact Info */}
                   <li className="contact-info color-1 bg-hover active hover-bottom text-center p-5 m-3">
                     <span><i className="fas fa-mobile-alt fa-3x" /></span>
                     <Link className="d-block my-2" to="#">
                       <h3>+89 (0) 2354 5470091</h3>
                     </Link>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                   </li>
                   {/* Contact Info */}
                   <li className="contact-info color-3 bg-hover active hover-bottom text-center p-5 m-3">
                     <span><i className="fas fa-envelope-open-text fa-3x" /></span>
                     <Link className="d-none d-sm-block my-2" to="#">
                       <h3>mail@company.com</h3>
                     </Link>
                     <Link className="d-block d-sm-none my-2" to="#">
                       <h3>mail@your company.com</h3>
                     </Link>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="col-12 col-lg-6 pt-4 pt-lg-0">
               {/* Contact Box */}
               <div className="contact-box text-center">
                 {/* Contact Form */}
                 <form id="contact-form" method="POST" action="https://theme-land.com/digimx/demo/assets/php/mail.php">
                   <div className="row">
                     <div className="col-12">
                       <div className="form-group">
                         <input type="text" className="form-control" name="name" placeholder="Name" required="required" />
                       </div>
                       <div className="form-group">
                         <input type="text" className="form-control" name="name" placeholder="Company Name" required="required" />
                       </div>
                       <div className="form-group">
                         <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                       </div>
                       <div className="form-group">
                         <input type="text" className="form-control" name="subject" placeholder="Phone" required="required" />
                       </div>
                     </div>
                     <div className="col-12">
                       <div className="form-group">
                         <textarea className="form-control" name="message" placeholder="Message" required="required" defaultValue={""} />
                       </div>
                     </div>
                     <div className="col-12">
                       <button type="submit" className="btn btn-bordered active btn-block mt-3"><span className="text-white pr-3"><i className="fas fa-paper-plane" /></span>Send Message</button>
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
                 <h2 className="text-white">Looking for the best digital agency &amp; marketing solution?</h2>
                 <p className="text-white d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                 <p className="text-white d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                 <Link to="#" className="btn btn-bordered-white mt-4">Contact Us</Link>
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
                       <h2 className="search-title mb-3">What are you looking for?</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam lacus, dapibus sed imperdiet consectetur.</p>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-12 input-group">
                       <input type="text" className="form-control" placeholder="Enter your keywords" />
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
   </div>
  )
}
