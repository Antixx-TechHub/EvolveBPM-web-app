<template>
   <div class="footer-area pt-100 footer-bg2 p-relative">
      <div class="footer-main-shape">
         <img src="../assets/img/banner/footer-2-bg-2.png" alt="">
      </div>
      <div class="footer-shape-left d-none d-xl-block">
         <div class="footer-shape-left-one">
            <img src="../assets/img/shape/footer-dew-shape.png" alt="footer-shape">
         </div>
         <div class="footer-shape-left-two">
            <img src="../assets/img/shape/footer-dot-1.png" alt="footer-shape">
         </div>
         <div class="footer-shape-left-three">
            <img src="../assets/img/shape/footer-leaf-shape.png" alt="footer-shape">
         </div>
         <div class="footer-shape-left-four">
            <img src="../assets/img/shape/footer-man-shape.png" alt="footer-shape">
         </div>
      </div>
      <div class="footer-shape-right d-none d-xl-block">
         <div class="footer-shape-right-one">
            <img src="../assets/img/shape/footer-man-shape-2.png" alt="footer-shape">
         </div>
         <div class="footer-shape-right-two">
            <img src="../assets/img/shape/footer-dot-1.png" alt="footer-shape">
         </div>
         <div class="footer-shape-right-three">
            <img src="../assets/img/shape/footer-plant.png" alt="footer-shape">
         </div>
         <div class="footer-shape-right-four">
            <img src="../assets/img/shape/footer-rocket.png" alt="footer-shape">
         </div>
      </div>
      <div class="container">
         <div class="footer-top">
            <div class="row">
               <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="footer-widget footer-2-col-1 mb-30">
                     <div class="footer-widget-logo mb-20">
                        <nuxt-link to="/">
                           <span>
                              <img src="../assets/img/logo/logo.svg" alt="">
                           </span>
                        </nuxt-link>
                     </div>
                     <div class="footer-widget-newsletter2 mb-40">
                        <h4 class="title">Subscribe our Newsletter!</h4>
                        <form action="#">
                           <div class="footer-widget-newsletter2-input2">
                              <input type="email" placeholder="Email">
                              <button>Subscribe</button>
                           </div>
                        </form>
                     </div>
                     <div class="footer-widget-content">
                        <div class="footer-widget-social2">
                           <a target="_blank" href="https://www.facebook.com/EvolveBPM/" class="footer-facebook"><i
                                 class="fa-brands fa-facebook-f"></i></a>
                           <a target="_blank" href="https://www.linkedin.com/company/evolve-bpm/"
                              class="footer-linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                           <a target="_blank" href="https://twitter.com/evolvebpm" class="footer-linkedin"><i
                                 class="fa-brands fa-twitter"></i></a>
                           <a target="_blank" href="https://www.instagram.com/evolvebpm" class="footer-insta"><i
                                 class="fa-brands fa-instagram"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="footer-widget footer-widget-2 footer-2-col-2 mb-40">
                     <h4 class="footer-widget-title mb-15">Information</h4>
                     <div class="footer-widget-link">
                        <ul>
                           <li><nuxt-link to="/">Home</nuxt-link></li>
                           <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                           <li><nuxt-link to="/careers">Careers</nuxt-link></li>
                           <li><nuxt-link to="/blogs">Blogs</nuxt-link></li>
                           <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="footer-widget footer-widget-2 footer-2-col-3 mb-40">
                     <h4 class="footer-widget-title mb-15">Services</h4>
                     <div class="footer-widget-link">
                        <ul>
                           <li><nuxt-link to="/">iRev</nuxt-link></li>
                           <li><nuxt-link to="/">iIntel</nuxt-link></li>
                           <li><nuxt-link to="/">iMedia</nuxt-link></li>
                           <li><nuxt-link to="/">Innovator</nuxt-link></li>
                           <li><nuxt-link to="/">TechBase</nuxt-link></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="footer-widget footer-widget-2 footer-2-col-4 mb-40">
                     <h4 class="footer-widget-title mb-20">Contact Us</h4>
                     <div class="tpcontact-info-links">
                        <nuxt-link to="tel:+91-020-69029999">
                           <i><img src="../assets/img/icon/phone-icon.png" alt=""></i> +91-020-69029999
                        </nuxt-link>
                        <nuxt-link to="mailto:corporate@evolvebpm.com">
                           <i><img src="../assets/img/icon/massage-icon.png" alt=""></i> corporate@evolvebpm.com
                        </nuxt-link>
                        <nuxt-link to="/">
                           <i><img src="../assets/img/icon/location-icon.png" alt=""></i> PUNE - Vatika Business Centre &
                           Co-working Spaces, 3rd Floor, Sky Belvedere, Opp Symbiosis Law College, New Airport Rd, Viman
                           Nagar, Pune 411014, Maharashtra, IN.
                        </nuxt-link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="footer-bottom">
            <div class="row">
               <div class="col-lg-12">
                  <div class="footer-widget-copyright footer-widget-copyright2 text-center">
                     <span>© 2023 Copyrights by EvolveBPM. All Rights Reserved. Designed by <a target="_blank"
                           href="https://weblytics.in/">Weblytics Solutions</a></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
 
<script>
export default {
   name: 'Footer',
}
</script>