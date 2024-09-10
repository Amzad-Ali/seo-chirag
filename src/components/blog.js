import React from 'react'
import { useState,useEffect } from 'react'


export default function Blog() {
   
const [loading,setLoading] = useState(true);

useEffect(()=>{
    setTimeout(()=>{
        setLoading(false);
    },3000)
},[])
  return (
    <>
    {loading ? (
 <div id="preloader">
   
 <div id="digimax-preloader" className="digimax-preloader">

   <div className="preloader-animation">

     <div className="spinner" />

     <div className="loader">
       <span data-text-preloader="D" className="animated-letters">
         D
       </span>
       <span data-text-preloader="I" className="animated-letters">
         I
       </span>
       <span data-text-preloader="G" className="animated-letters">
         G
       </span>
       <span data-text-preloader="I" className="animated-letters">
         I
       </span>
       <span data-text-preloader="M" className="animated-letters">
         M
       </span>
       <span data-text-preloader="A" className="animated-letters">
         A
       </span>
       <span data-text-preloader="X" className="animated-letters">
         X
       </span>
     </div>
     <p className="fw-5 text-center text-uppercase">Loading</p>
   </div>

   <div className="loader-animation">
     <div className="row h-100">

       <div className="col-3 single-loader p-0">
         <div className="loader-bg" />
       </div>
      
       <div className="col-3 single-loader p-0">
         <div className="loader-bg" />
       </div>

       <div className="col-3 single-loader p-0">
         <div className="loader-bg" />
       </div>
     
       <div className="col-3 single-loader p-0">
         <div className="loader-bg" />
       </div>
     </div>
   </div>
 </div>
</div>
    ) : (
        <div>
     <div id="scrollUp" title="Scroll To Top">
    <i className="fas fa-arrow-up" />
  </div>
 
  <div className="main overflow-hidden">

    <section className="section breadcrumb-area overlay-dark d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
         
            <div className="breadcrumb-content text-center">
              <h2 className="text-white text-uppercase mb-3">Blog Single</h2>
              <ol className="breadcrumb d-flex justify-content-center">
                <li className="breadcrumb-item">
                  <a className="text-uppercase text-white" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-uppercase text-white" href="#">
                    Blog Pages
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-uppercase text-white" href="#">
                    Blog Single
                  </a>
                </li>
                <li className="breadcrumb-item text-white active">
                  Single Right Sidebar
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section id="blog" className="section blog-area ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
           
            <article className="single-blog-details">
            
              <div className="blog-thumb">
                <a href="#">
                  <img src="assets/img/blog/blog-7.jpg" alt="" />
                </a>
              </div>
           
              <div className="blog-content digimax-blog p-3">
          
                <div className="meta-info d-flex flex-wrap align-items-center py-2">
                  <ul>
                    <li className="d-inline-block p-2">
                      By <a href="#">Anna Swford</a>
                    </li>
                    <li className="d-none d-md-inline-block p-2">
                      <a href="#">05 Feb, 2020</a>
                    </li>
                    <li className="d-inline-block p-2">
                      <a href="#">2 Comments</a>
                    </li>
                  </ul>
               
                  <div className="blog-share ml-auto d-none d-sm-block">
                   
                    <div className="social-icons d-flex justify-content-center">
                      <a className="bg-white facebook" href="#">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="bg-white twitter" href="#">
                        <i className="fab fa-twitter" />
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="bg-white google-plus" href="#">
                        <i className="fab fa-google-plus-g" />
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </div>
                  </div>
                </div>
            
                <div className="blog-details">
                  <h3 className="blog-title py-3">
                    <a href="#">Blog Content Here</a>
                  </h3>
                  <p className="d-none d-sm-block">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary.
                  </p>
                  <p className="d-block d-sm-none">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage.
                  </p>
                  <blockquote className="blockquote px-4 py-3 my-3 ml-4">
                    <p className="font-italic d-none d-sm-block">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature.
                    </p>
                    <p className="font-italic d-block d-sm-none">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </blockquote>
                  <p className="d-none d-sm-block">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <p className="d-block d-sm-none">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33.
                  </p>
                </div>
              </div>
            
              <div className="blog-comments p-3">
              
                <div className="admin media py-4">
                 
                  <div className="admin-thumb avatar-lg">
                    <img
                      className="rounded-circle"
                      src="assets/img/avatar/avatar-1.png"
                      alt=""
                    />
                  </div>
        
                  <div className="admin-content media-body pl-3 pl-sm-4">
                    <h4 className="admin-name mb-2">
                      <a href="#">Junaid Hasan</a>
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                </div>
              
                <div className="comments mt-4 mb-3">
                 
                  <h3 className="comments-title text-uppercase text-left text-lg-right mb-3">
                    Recent Comments
                  </h3>
                  
                  <div className="single-comments media p-4">
                  
                    <div className="comments-thumb avatar-lg">
                      <img
                        className="rounded-circle"
                        src="assets/img/avatar/avatar-2.png"
                        alt=""
                      />
                    </div>
                
                    <div className="comments-content media-body pl-3">
                      <h5 className="d-flex mb-2">
                        <a href="#">Jassica William</a>
                        <a href="#" className="ml-auto">
                          Reply
                        </a>
                      </h5>
                      <p className="d-none d-lg-block">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites
                        still in their infancy.
                      </p>
                      <p className="d-block d-lg-none">
                        Many desktop publishing packages and web page editors
                        now use.
                      </p>
                    </div>
                  </div>
                
                  <div className="single-comments media p-4">
                
                    <div className="comments-thumb avatar-lg">
                      <img
                        className="rounded-circle"
                        src="assets/img/avatar/avatar-3.png"
                        alt=""
                      />
                    </div>
                    
                    <div className="comments-content media-body pl-3">
                      <h5 className="d-flex mb-2">
                        <a href="#">Junaid Hasan</a>
                        <a href="#" className="ml-auto">
                          Reply
                        </a>
                      </h5>
                      <p className="d-none d-lg-block">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system.
                      </p>
                      <p className="d-block d-lg-none">
                        But I must explain to you how all this mistaken idea.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="blog-contact p-3">
              
                <h3 className="comments-title text-uppercase text-left text-lg-right mb-3">
                  Post your Comments
                </h3>
               
                <div className="contact-box comment-box">
                  <form method="POST" action="#">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
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
                        <button className="btn btn-bordered" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-lg-3">
            <aside className="sidebar mt-5 mt-lg-0">
           
              <div className="single-widget">
             
                <div className="widget-content search-widget">
                  <form action="#">
                    <input type="text" placeholder="Enter your keywords" />
                  </form>
                </div>
              </div>
         
              <div className="single-widget">
             
                <div className="widget catagory-widget">
                  <h5 className="text-uppercase d-block py-3">Categories</h5>
               
                  <div className="widget-content">
                  
                    <ul className="widget-items">
                      <li>
                        <a href="#" className="d-flex py-3">
                          <span>Web Design</span>
                          <span className="ml-auto">(14)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex py-3">
                          <span>Digital Agency</span>
                          <span className="ml-auto">(32)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex py-3">
                          <span>Wordpress</span>
                          <span className="ml-auto">(27)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex py-3">
                          <span>UI Design</span>
                          <span className="ml-auto">(18)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex py-3">
                          <span>Marketing</span>
                          <span className="ml-auto">(15)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex py-3">
                          <span>Web Template</span>
                          <span className="ml-auto">(29)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             
              <div className="single-widget">
             
                <div className="widget post-widget">
                  <h5 className="text-uppercase d-block py-3">Popular Post</h5>
             
                  <div className="widget-content">
             
                    <ul className="widget-items">
                      <li>
                        <a href="#" className="single-post media py-3">
                 
                          <div className="post-thumb avatar-lg h-100 d-flex align-self-center">
                            <img
                              src="assets/img/case_studies/case_studies_1/thumb_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="post-content media-body ml-3 py-2">
                            <p className="post-date mb-2">05 Feb, 2020</p>
                            <h6>Post Tile Here</h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="single-post media py-3">
                       
                          <div className="post-thumb avatar-lg h-100 d-flex align-self-center">
                            <img
                              src="assets/img/case_studies/case_studies_1/thumb_2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="post-content media-body ml-3 py-2">
                            <p className="post-date mb-2">09 Apr, 2020</p>
                            <h6>Post Tile Here</h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="single-post media py-3">
                       
                          <div className="post-thumb avatar-lg h-100 d-flex align-self-center">
                            <img
                              src="assets/img/case_studies/case_studies_1/thumb_3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="post-content media-body ml-3 py-2">
                            <p className="post-date mb-2">13 Jul, 2020</p>
                            <h6>Post Tile Here</h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="single-post media py-3">
                        
                          <div className="post-thumb avatar-lg h-100 d-flex align-self-center">
                            <img
                              src="assets/img/case_studies/case_studies_1/thumb_4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="post-content media-body ml-3 py-2">
                            <p className="post-date mb-2">03 Oct, 2020</p>
                            <h6>Post Tile Here</h6>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             
              <div className="single-widget">
            
                <div className="widget tags-widget">
                  <h5 className="text-uppercase d-block py-3">Popular Tags</h5>
                 
                  <div className="widget-content">
                 
                    <div className="widget-content tags-widget-items pt-2">
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Digimax
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Bootstrap
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Agency
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Marketing
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Landing Page
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Business
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Fashion
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Media
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Lifestyle
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Wordpress
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Web Design
                      </a>
                      <a
                        href="#"
                        className="d-inline-block mt-2 mr-1 px-2 py-1"
                      >
                        Mobile App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  
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
   
  </div>
        </div>
   
    )}
 
  
 
</>

  )
}
