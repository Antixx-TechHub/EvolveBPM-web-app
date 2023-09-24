<template>
   <div :id="headerId" :class="headerClasses">
      <div class="container">
         <div class="tp-mega-menu-wrapper">
            <div class="row align-items-center">
               <div class="col-xl-2 col-lg-6 col-sm-4 col-6">
                  <div class="tplogo__area">
                     <nuxt-link to="/">
                        <span>
                           <img src="../assets/img/logo/logo.svg" alt="">
                        </span>
                     </nuxt-link>
                  </div>
               </div>
               <div class="col-xl-6 col-lg-5 d-none d-xl-block">
                  <div class="tpmenu__area main-mega-menu pl-35">
                     <nav class="tp-main-menu-content">
                        <ul>
                           <li>
                              <NuxtLink to="/">
                                 Home
                              </NuxtLink>
                           </li>
                           <li>
                              <NuxtLink to="/about-us">
                                 About
                              </NuxtLink>
                           </li>
                           <li class="header-services has-dropdown has-mega-menu">
                              <a href="services.html">Services</a>
                              <div class="tp-mega-menu tp-submenu submenu">
                                 <div class="row">
                                    <div class="col-xl-6">
                                       <div class="tp-menu-banner">
                                          <h5 class="tp-menu-banner-title">Services Overview</h5>
                                          <ul>
                                             <li>
                                                <nuxt-link to="/">
                                                   <span> <img src="../assets/img/header-icon/keyword.png" alt=""> </span>
                                                   Keyword Research
                                                </nuxt-link>
                                             </li>
                                             <li>
                                                <nuxt-link to="/">
                                                   <span> <img src="../assets/img/header-icon/audit.png" alt=""> </span>
                                                   SEO Audit Services
                                                </nuxt-link>
                                             </li>
                                             <li>
                                                <nuxt-link to="/">
                                                   <span> <img src="../assets/img/header-icon/building.png" alt=""> </span>
                                                   Link Building Services
                                                </nuxt-link>
                                             </li>
                                             <li>
                                                <nuxt-link to="/">
                                                   <span> <img src="../assets/img/header-icon/media.png" alt=""> </span>
                                                   Social Media Marketing
                                                </nuxt-link>
                                             </li>
                                             <li>
                                                <nuxt-link to="/">
                                                   <span> <img src="../assets/img/header-icon/analysis.png" alt=""> </span>
                                                   SEO analysis.
                                                </nuxt-link>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div class="col-xl-6">
                                       <div class="tp-menu-banner-wrap">
                                          <div class="tp-menu-banner-content">
                                             <span>SEO Agency</span>
                                             <h5 class="tp-menu-banner-title-2">The #1 SEO <br> agency for fast growing
                                                <br> companies.
                                             </h5>
                                             <div class="tp-menu-banner-btn">
                                                <a href="services.html">
                                                   Learn more
                                                   <span>
                                                      <svg width="9" height="10" viewBox="0 0 9 10" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M1 1.5L8 8.5" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                         <path d="M8 1.5V8.5H1" stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                      </svg>
                                                   </span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="tp-menu-banner-thumb">
                                             <img src="../assets/img/header-icon/header-banner/header-banner-1.png" alt="">
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li class="has-dropdown has-megamenu">
                              <nuxt-link to="/">Pages</nuxt-link>
                              <ul class="tp-submenu submenu mega-menu">
                                 <li>
                                    <ul>
                                       <li><nuxt-link to="/">About Us</nuxt-link></li>
                                       <li><nuxt-link to="/">Services</nuxt-link></li>
                                       <li><nuxt-link to="/">Team Member</nuxt-link></li>
                                       <li><nuxt-link to="/">Team Details</nuxt-link></li>
                                       <li><nuxt-link to="/">Sign In</nuxt-link></li>
                                       <li><nuxt-link to="/">Sign Up</nuxt-link></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       <li><nuxt-link to="/">Pricing</nuxt-link></li>
                                       <li><nuxt-link to="/">Case Studies 2 Columns</nuxt-link></li>
                                       <li><nuxt-link to="/">Case Studies 3 Columns</nuxt-link></li>
                                       <li><nuxt-link to="/">Case Studies Details</nuxt-link></li>
                                       <li><nuxt-link to="/">Blog Grid</nuxt-link></li>
                                       <li><nuxt-link to="/">Blog Masonry</nuxt-link></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       <li><nuxt-link to="/">Blog List</nuxt-link></li>
                                       <li><nuxt-link to="/">Blog Details</nuxt-link></li>
                                       <li><nuxt-link to="/">Blog Details Full Width</nuxt-link></li>
                                       <li><nuxt-link to="/">FAQ</nuxt-link></li>
                                       <li><nuxt-link to="/">Contact</nuxt-link></li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li class="has-dropdown">
                              <a href="blog.html">Blog</a>
                              <ul class="tp-submenu submenu">
                                 <li><nuxt-link to="/">Blog</nuxt-link></li>
                                 <li><nuxt-link to="/">Blog Grid</nuxt-link></li>
                                 <li><nuxt-link to="/">Blog Masonry</nuxt-link></li>
                                 <li><nuxt-link to="/">Blog List</nuxt-link></li>
                                 <li><nuxt-link to="/">Blog Details</nuxt-link></li>
                                 <li><nuxt-link to="/">Blog Details Full Width</nuxt-link></li>
                              </ul>
                           </li>
                           <li>
                              <nuxt-link to="/">Contact</nuxt-link>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-6 col-sm-8 col-6">
                  <div class="tpheader__right d-flex align-items-center justify-content-end">
                     <div class="d-none d-md-block">
                        <!-- Add your content here -->
                     </div>
                     <div class="tpheader-btn-two ml-25 d-none d-md-block">
                        <nuxt-link to="/marketing-analysis">Free SEO Consultation</nuxt-link>
                     </div>
                     <div class="offcanvas-btn d-xl-none ml-20">
                        <button class="offcanvas-open-btn" @click="openCanvas"><i class="fa-solid fa-bars"></i></button>
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
   props: {
      sticky: Boolean,
      headerId: String,
   },
   computed: {
      headerClasses() {
         return {
            'tptransparent__header': true,
            'header-green': true,
            'header-spaces': true,
            'header-sticky': this.sticky,
         };
      },
   },
   methods: {
      openCanvas() {
         // Implement your canvas opening logic here
      },
      stickyHeader() {
         if (window.scrollY > 200) {
            this.sticky = true;
         } else {
            this.sticky = false;
         }
      },
   },
   data() {
      return {
         sticky: false,
      };
   },
   mounted() {
      window.addEventListener("scroll", this.stickyHeader);
   },
   beforeDestroy() {
      window.removeEventListener("scroll", this.stickyHeader);
   },
};
</script>
 
<style scoped>/* Add your component-specific styles here */</style>