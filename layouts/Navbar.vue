<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]" class="tptransparent__header header-green header-spaces">
       <div class="container">
             <div class="tp-mega-menu-wrapper">
                <div class="row align-items-center">
                   <div class="col-xl-1 col-lg-6 col-sm-4 col-6">
                      <div class="tplogo__area">
                         <a href="index.html">
                            <img src="../assets/img/logo/logo-green.png" alt="">
                         </a>
                      </div>
                   </div>
                   <div class="col-xl-7 col-lg-5  d-none d-xl-block">
                      <div class="tpmenu__area main-mega-menu pl-35">
                         <nav class="tp-main-menu-content">
                            <ul>
                               <li class="has-dropdown has-mega-menu">
                                  <a href="index.html">Home</a>
                                  <div class="tp-submenu submenu has-homemenu tp-mega-menu">
                                     <div class="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                        <div class="col homemenu active">
                                           <div class="homemenu-thumb">
                                              <img src="assets/img/menu/home-1.jpg" alt="">
                                           </div>
                                           <div class="homemenu-btn">
                                              <a class="menu-btn mb-5" href="index.html">Multi Page</a>
                                              <a class="menu-btn" href="index-one-page.html">One Page</a>
                                           </div>
                                           <div class="demo-name">
                                              <span>SEO Marketing</span>
                                           </div>
                                        </div>
                                        <div class="col homemenu">
                                           <div class="homemenu-thumb">
                                              <img src="assets/img/menu/home-2.jpg" alt="">
                                           </div>
                                           <div class="homemenu-btn">
                                              <a class="menu-btn mb-5" href="index-2.html">Multi Page</a>
                                              <a class="menu-btn" href="index-2-one-page.html">One Page</a>
                                           </div>
                                           <div class="demo-name">
                                              <span>SEO Analysis</span>
                                           </div>
                                        </div>
                                        <div class="col homemenu">
                                           <div class="homemenu-thumb">
                                              <img src="assets/img/menu/home-3.jpg" alt="">
                                           </div>
                                           <div class="homemenu-btn">
                                              <a class="menu-btn mb-5" href="index-3.html">Multi Page</a>
                                              <a class="menu-btn" href="index-3-one-page.html">One Page</a>
                                           </div>
                                           <div class="demo-name">
                                              <span>Business SEO</span>
                                           </div>
                                        </div>
                                        <div class="col homemenu">
                                           <div class="homemenu-thumb">
                                              <img src="assets/img/menu/home-4.jpg" alt="">
                                           </div>
                                           <div class="homemenu-btn">
                                              <a class="menu-btn mb-5" href="index-4.html">Multi Page</a>
                                              <a class="menu-btn" href="index-4-one-page.html">One Page</a>
                                           </div>
                                           <div class="demo-name">
                                              <span>SEO Agency</span>
                                           </div>
                                        </div>
                                        <div class="col homemenu">
                                           <div class="homemenu-thumb">
                                              <img src="assets/img/menu/home-5.jpg" alt="">
                                           </div>
                                           <div class="homemenu-btn">
                                              <a class="menu-btn mb-5" href="index-5.html">Multi Page</a>
                                              <a class="menu-btn" href="index-5-one-page.html">One Page</a>
                                           </div>
                                           <div class="demo-name">
                                              <span>SEO Campaign</span>
                                           </div>
                                        </div>
                                     </div>
                                  </div>
                               </li>
                               <li><a href="about.html">About</a></li>
                               <li class="header-services has-dropdown has-mega-menu">
                                  <a href="services.html">Services</a>
                                  <div class="tp-mega-menu tp-submenu submenu">
                                     <div class="row">
                                        <div class="col-xl-6">
                                           <div class="tp-menu-banner">
                                              <h5 class="tp-menu-banner-title">Services Overview</h5>
                                              <ul>
                                                 <li>
                                                    <a href="keyword-search.html">
                                                       <span> <img src="assets/img/header-icon/keyword.png" alt=""> </span>
                                                       Keyword Research
                                                    </a>
                                                 </li>
                                                 <li>
                                                    <a href="seo-audit.html">
                                                       <span> <img src="assets/img/header-icon/audit.png" alt=""> </span>
                                                       SEO Audit Services
                                                    </a>
                                                 </li>
                                                 <li>
                                                    <a href="building-social-services.html">
                                                       <span> <img src="assets/img/header-icon/building.png" alt=""> </span>
                                                       Link Building Services
                                                    </a>
                                                 </li>
                                                 <li>
                                                    <a href="social-media-markiting.html">
                                                       <span> <img src="assets/img/header-icon/media.png" alt=""> </span>
                                                       Social Media Marketing
                                                    </a>
                                                 </li>
                                                 <li>
                                                    <a href="marketing-analysis.html">
                                                       <span> <img src="assets/img/header-icon/analysis.png" alt=""> </span>
                                                       SEO analysis.
                                                    </a>
                                                 </li>
                                              </ul>
                                           </div>
                                        </div>
                                        <div class="col-xl-6">
                                           <div class="tp-menu-banner-wrap">
                                              <div class="tp-menu-banner-content">
                                                 <span>SEO Agency</span>
                                                 <h5 class="tp-menu-banner-title-2">The #1 SEO <br> agency for fast growing <br> companies.</h5>
                                                 <div class="tp-menu-banner-btn">
                                                    <a href="services.html">
                                                       Learn more 
                                                       <span>
                                                          <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                             <path d="M1 1.5L8 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                             <path d="M8 1.5V8.5H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                          </svg>
                                                       </span>
                                                    </a>
                                                 </div>
                                              </div>
                                              <div class="tp-menu-banner-thumb">
                                                 <img src="assets/img/header-icon/header-banner/header-banner-1.png" alt="">
                                              </div>
                                           </div>
                                        </div>
                                     </div>
                                  </div> 
                               </li>
                               <li class="has-dropdown has-megamenu">
                                  <a href="about.html">Pages</a>
                                  <ul class="tp-submenu submenu mega-menu">
                                     <li>
                                        <ul>
                                           <li><a href="about.html">About Us</a></li>
                                           <li><a href="services.html">Services</a></li>
                                           <li><a href="team.html">Team Member</a></li>
                                           <li><a href="team-details.html">Team Details</a></li>
                                           <li><a href="sign-in.html">Sign In</a></li>
                                           <li><a href="sign-out.html">Sign Up</a></li>
                                        </ul>
                                     </li>
                                     <li>
                                        <ul>
                                           <li><a href="pricing.html">Pricing</a></li>
                                           <li><a href="portfolio.html">Case Studies 2 Columns</a></li>
                                           <li><a href="portfolio-2.html">Case Studies 3 Columns</a></li>
                                           <li><a href="portfolio-details.html">Case Studies Details</a></li>
                                           <li><a href="blog-grid.html">Blog Grid</a></li>
                                           <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                        </ul>
                                     </li>
                                     <li>
                                        <ul>
                                           <li><a href="blog-list.html">Blog List</a></li>
                                           <li><a href="blog-details.html">Blog Details</a></li>
                                           <li><a href="blog-details-2.html">Blog Details Full Width</a></li>
                                           <li><a href="faq.html">FAQ</a></li>
                                           <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                     </li>
                                  </ul>
                               </li>
                               <li class="has-dropdown">
                                  <a href="blog.html">Blog</a>
                                  <ul class="tp-submenu submenu">
                                     <li><a href="blog.html">Blog</a></li>
                                     <li><a href="blog-grid.html">Blog Grid</a></li>
                                     <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                     <li><a href="blog-list.html">Blog List</a></li>
                                     <li><a href="blog-details.html">Blog Details</a></li>
                                     <li><a href="blog-details-2.html">Blog Details Full Width</a></li>
                                  </ul>
                               </li>
                               <li>
                                  <a href="contact.html">Contact</a>
                               </li>
                            </ul>
                         </nav>
                      </div>
                   </div>
                   <div class="col-xl-4 col-lg-6 col-sm-8 col-6">
                      <div class="tpheader__right d-flex align-items-center justify-content-end">
                         <div class="d-none d-md-block">
                         </div>
                         <div class="tpheader-btn-two ml-25 d-none d-md-block">
                            <a href="marketing-analysis.html">Free SEO Consultation</a>
                         </div>
                         <div class="offcanvas-btn d-xl-none ml-20">
                            <button class="offcanvas-open-btn"><i class="fa-solid fa-bars"></i></button>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
    </div>
 </template>
 
 <script>
 export default {
    name: 'Navbar',
    data() {
        return {
            isSticky: false,
        }
    },

    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    },
 }
 </script>